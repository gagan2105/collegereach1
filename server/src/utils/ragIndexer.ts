import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import mongoose from "mongoose";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const initRagIndexer = async () => {
  try {
    // We assume mongoose is connected. Get the underlying collection
    // Get native MongoClient from Mongoose
    const client = mongoose.connection.getClient() as any;
    const collection = client.db().collection("rag_documents");
    
    // Check if we want to re-index (always drop for this update)
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log("RAG Indexer: Deleting existing documents to re-index new data...");
      await collection.deleteMany({});
    }

    console.log("RAG Indexer: Starting indexing process...");

    // 1. LOAD KNOWLEDGE BASE TEXT
    const kbPath = path.join(__dirname, "../data/knowledgeBase.txt");
    const textData = fs.readFileSync(kbPath, "utf-8");

    // 2. LOAD PLACEMENT CSV
    let csvDocs: any[] = [];
    try {
      const csvPath = "c:/Users/admin/Downloads/Placement_Data_Full_Class.csv";
      if (fs.existsSync(csvPath)) {
        const csvData = fs.readFileSync(csvPath, "utf-8");
        const lines = csvData.split("\n").map(l => l.trim()).filter(l => l);
        if (lines.length === 0) return;
        const parsedRows = lines.slice(1).map(line => {
          const cols = line.split(",");
          while (cols.length < 14) cols.push(""); // Ensure 14 columns
          return `Student ${cols[0]} (${cols[1]}): 10th marks ${cols[2]}% (${cols[3]}), 12th marks ${cols[4]}% (${cols[5]}, ${cols[6]}), Degree ${cols[7]}% (${cols[8]}). Work Exp: ${cols[9]}, MBA Specialization: ${cols[10]} (${cols[11]}%). Status: ${cols[12]}, Salary: ${cols[13] || "N/A"}.`;
        });
        const csvText = `--- EduReach Placement Records ---\n\n` + parsedRows.join("\n");
        csvDocs = await new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 50 }).createDocuments([csvText], [{ source: "Placement_Data_Full_Class.csv" }]);
        console.log(`RAG Indexer: Parsed CSV into ${csvDocs.length} chunks.`);
      }
    } catch (e) {
      console.warn("Could not load placement CSV:", e);
    }

    // 3. SPLIT
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
    });
    const splitDocs = await textSplitter.createDocuments([textData], [{ source: "knowledgeBase.txt" }]);
    const finalDocs = [...splitDocs, ...csvDocs];
    console.log(`RAG Indexer: Text split into ${splitDocs.length} chunks. Total chunks: ${finalDocs.length}`);

    // 3. EMBED & STORE
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY) as string,
      model: "gemini-embedding-001", 
    });

    await MongoDBAtlasVectorSearch.fromDocuments(
      finalDocs,
      embeddings,
      {
        collection: collection,
        indexName: "vector_index", // MUST correspond to Atlas Vector Search Index name
        textKey: "text",
        embeddingKey: "embedding",
      }
    );

    console.log("RAG Indexer: Successfully indexed documents into MongoDB Atlas.");
    console.log("IMPORTANT: Ensure you have created a Vector Search Index named 'vector_index' in Atlas on the 'rag_documents' collection!");
  } catch (error) {
    console.error("RAG Indexer Error: ", error);
  }
};

import { MongoClient } from "mongodb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import * as dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri as string);

async function runTest() {
  try {
    await client.connect();
    console.log("Connected to MongoDB.");
    
    const db = client.db("edureach_db");
    const collection = db.collection("rag_documents");

    const count = await collection.countDocuments();
    console.log(`Total documents in collection: ${count}`);

    // Embed a test query
    const embeddings = new GoogleGenerativeAIEmbeddings({
        apiKey: process.env.GEMINI_API_KEY as string,
        model: "gemini-embedding-001", 
    });
    console.log("Generating embedding for query...");
    const queryEmbedding = await embeddings.embedQuery("What is the salary and placement status of Student 22?");
    console.log(`Query embedded. Dimensions: ${queryEmbedding.length}`);

    console.log("Running Vector Search...");
    const results = await collection.aggregate([
      {
        $vectorSearch: {
          index: "vector_index",
          path: "embedding",
          queryVector: queryEmbedding,
          numCandidates: 10,
          limit: 3
        }
      }
    ]).toArray();

    console.log(`Vector Search Results Count: ${results.length}`);
    if (results.length > 0) {
        console.log("Top Result Content: ", (results[0] as any).text);
        console.log("Score:", (results[0] as any).score);
    } else {
        console.log("No results found. The index might still be building, or the index name/config is wrong in Atlas.");
    }

  } catch (error) {
    console.error("Test error:", error);
  } finally {
    await client.close();
  }
}

runTest();

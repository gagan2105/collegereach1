import express, { type Request, type Response } from "express";
import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { PromptTemplate } from "@langchain/core/prompts";
import mongoose from "mongoose";

export const chatWithAgent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ success: false, message: "Message is required." });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not explicitly set, falling back to GOOGLE_API_KEY if present.");
    }

    // Initialize Vector Store connection
    const client = mongoose.connection.getClient() as any;
    const collection = client.db().collection("rag_documents");
    
    // We must pass the API key explicitly to avoid connection failures
    const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
    if (!apiKey) {
         res.status(500).json({ success: false, message: "No Google API Key found in environment." });
         return;
    }

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: apiKey,
      model: "gemini-embedding-001", 
    });

    const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
      collection: collection,
      indexName: "vector_index",
      textKey: "text",
      embeddingKey: "embedding",
    });

    // Retrieve context chunks
    // Fetch top 3 relevant parts
    const results = await vectorStore.similaritySearch(message, 3);
    console.log("Vector Search Results count:", results.length);
    if(results.length > 0 && results[0]) {
       console.log("Top result snippet:", results[0].pageContent?.substring(0, 100));
    }
    const contextText = results.map((doc: any) => doc.pageContent).join("\n\n");

    // Generative Model
    const llm = new ChatGoogleGenerativeAI({
      model: "gemini-2.5-flash",
      apiKey: apiKey as string,
      maxOutputTokens: 512,
    });

    // Create Prompt Template
    const template = `You are a helpful EduReach conversational AI assistant for university students.
First, refer to the following pieces of context to answer the user's question. 
If the context contains the answer, use it. If the context does not contain the answer, do not say "I don't know". Instead, fall back to your general knowledge and provide a helpful answer, but politely clarify that this is general information and not specific to the college's official policies.
  
Context:
{context}

User Question: {question}

Helpful Answer:`;

    const prompt = PromptTemplate.fromTemplate(template);

    const chain = prompt.pipe(llm).pipe(new StringOutputParser());

    const answer = await chain.invoke({
      context: contextText || "No context found.",
      question: message,
    });

    res.status(200).json({
      success: true,
      data: {
        reply: answer,
        sources: results.map((r: any) => r.pageContent),
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Chat Error:", error.message);
      res.status(500).json({ success: false, message: error.message });
    } else {
      console.error("Chat Error:", error);
      res.status(500).json({ success: false, message: "Internal server error during chat processing." });
    }
  }
};

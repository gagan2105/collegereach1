import "dotenv/config";
import app from "./app.ts";
import connectDB from "./config/database.config.ts";
import { initFirebase } from "./config/firebase.config.ts";
import { initRagIndexer } from "./utils/ragIndexer.ts";

const PORT = process.env.PORT || 5000;

const start = async (): Promise<void> => {
  try {
    initFirebase();
    await connectDB();
    
    // Initialize AI Vector Search data (runs once)
    await initRagIndexer();

    app.listen(PORT, () => {
      console.log(`EduReach Server is running!`);
      console.log(`URL: http://localhost:${PORT}`);
      console.log(`Node: ${process.version}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

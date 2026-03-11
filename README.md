# EduReach Platform

**Live Demo:** [https://collegereach1.vercel.app/](https://collegereach1.vercel.app/)

EduReach is a modern, full-stack educational college platform designed to connect students with top-tier education, specialized mentorship, and vibrant campus experiences. It features a responsive landing page, dynamic course catalogs, verified placement statistics, and cutting-edge **AI integrations** for student support.

## 🌟 Key Features

### 🎓 College Information
- **Hero & About**: Stunning visuals and key college statistics (Est. 2005, 15,000+ Enrolled).
- **Course Catalog**: Interactive grid displaying B.Tech, BBA, and Design degree programs.
- **Campus Life**: Galleries and facility overviews representing library, labs, and sports complexes.
- **Placement Records**: Live data on 95%+ placement rates, average packages, and top recruiters (Google, Microsoft, Amazon).

### 🤖 AI Student Support Systems
EduReach is equipped with two powerful AI assistants to help students navigate the admissions process:
1.  **AI Chatbot (RAG System)**
    - Uses a Retrieval-Augmented Generation (RAG) architecture powered by **Google Gemini 2.5 Flash**.
    - Embedded **college admission FAQs, fee structures, and scholarship data** stored in a **MongoDB Atlas Vector Search** index.
    - Fully context-aware. If you ask about "Hostel Fees," it pulls the exact 2026 admission data. If the data isn't there, it falls back to Gemini's general knowledge.
    - Features a slide-out drawer UI with auto-scrolling Chat UI.

2.  **AI Voice Agent (Vapi)**
    - Allows students to click "Call with Ava" to receive a direct phone call from an AI Admission Counselor.
    - Powered by the **Vapi AI REST API**, triggering outbound PSTN calls routing directly to the student's mobile device to discuss enrollment.

---

## 🛠 Tech Stack

**Frontend:**
- React 18, Vite, TypeScript
- Tailwind CSS (Styling)
- Lucide React (Icons)
- Axios (API Client)

**Backend:**
- Node.js, Express.js, TypeScript
- MongoDB Cosmos / Atlas (Vector Database)
- LangChain JS (`@langchain/google-genai`, `@langchain/mongodb`)
- Google Gemini (`gemini-2.5-flash`, `gemini-embedding-001`)
- Vapi AI (Voice Calls API)

---

## 🚀 Local Development Setup

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account (with a Vector Search Index named `vector_index` created inside the `rag_documents` collection).
- API Keys: Google Gemini (AI Studio) and Vapi AI.

### 1. Backend Setup
1. Navigate to the server folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `server` directory and add the following keys:
   ```env
   PORT=5000
   MONGO_URI="your_mongodb_connection_string"
   GEMINI_API_KEY="your_google_gemini_api_key"
   VAPI_PRIVATE_KEY="your_vapi_private_api_key"
   VAPI_ASSISTANT_ID="your_vapi_assistant_uuid"
   VAPI_PHONE_NUMBER_ID="your_vapi_phone_number_uuid"
   ```
4. Start the backend development server (this will automatically seed the vector database on boot):
   ```bash
   npm run dev
   ```

### 2. Frontend Setup
1. Navigate to the client folder:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `client` directory and add the following keys:
   ```env
   VITE_API_URL="http://localhost:5000"
   VITE_VAPI_PUBLIC_KEY="your_vapi_public_api_key"
   VITE_VAPI_ASSISTANT_ID="your_vapi_assistant_uuid"
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. Open your browser to `http://localhost:5173`.

---

## 🌐 Deployment
The platform is fully configured for production deployment. Please refer to the `DEPLOYMENT_GUIDE.md` file in the root directory for step-by-step instructions on deploying the frontend to **Vercel** and the backend to **Render**.

---

*EduReach Platform - 2026 Admissions Release*

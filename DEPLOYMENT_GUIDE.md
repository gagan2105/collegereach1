# EduReach Deployment Guide (Vercel + Render)

This guide takes you step-by-step through deploying your full-stack EduReach application for FREE using Vercel (for the React Frontend) and Render (for the Node.js Backend).

---

## Step 1: Push your Code to GitHub
Both Vercel and Render deploy automatically from your GitHub repository.
1. Open your terminal in the root `edureach-platform` directory.
2. Initialize and push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Ready for production"
   git branch -M main
   # Add your github remote URL here:
   # git remote add origin https://github.com/yourusername/edureach-platform.git
   git push -u origin main
   ```

---

## Step 2: Deploy Backend to Render

1. Go to [Render.com](https://render.com) and sign in with GitHub.
2. Click **New +** and select **Web Service**.
3. Connect your new `edureach-platform` GitHub repository.
4. **Configuration Details**:
   - **Name**: `edureach-api`
   - **Root Directory**: `server` (Important!)
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: Free
5. **Environment Variables**:
   Scroll down to Advanced -> **Environment Variables**. Copy everything from your `server/.env` file and paste them here.
   - `MONGO_URI`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_PRIVATE_KEY` (ensure the `\n` characters are properly formatted)
   - `FIREBASE_CLIENT_EMAIL`
   - `GEMINI_API_KEY`
   - `VAPI_PRIVATE_KEY`
   - `VAPI_ASSISTANT_ID`
   - `VAPI_PHONE_NUMBER_ID`
6. Click **Create Web Service**. Wait for the build to finish, and copy your live Render URL (e.g., `https://edureach-api.onrender.com`).

---

## Step 3: Deploy Frontend to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New... -> Project** and import your `edureach-platform` repository.
3. **Configuration Details**:
   - **Project Name**: `edureach`
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: Click "Edit" and change it to `client`.
4. **Environment Variables**:
   Open the Environment Variables dropdown and enter exactly what you have in `client/.env`:
   - `VITE_API_URL` = **<PASTE YOUR RENDER URL HERE>** (e.g., `https://edureach-api.onrender.com`)
   - `VITE_VAPI_PUBLIC_KEY` = *your Vapi key*
   - `VITE_VAPI_ASSISTANT_ID` = *your Assistant ID*
5. Click **Deploy**. Vercel will install dependencies and create your live application.

🎉 **You are done! Your full-stack platform is now live on the internet!**

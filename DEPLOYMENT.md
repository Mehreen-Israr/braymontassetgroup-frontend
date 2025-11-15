# Render Deployment Guide

Complete guide for deploying both backend and frontend on Render.

## 📋 Prerequisites

1. Your code must be pushed to a GitHub repository
2. You need a Render account (sign up at [render.com](https://render.com))
3. Connect your GitHub account to Render

---

## 🔧 Backend Deployment (Web Service)

### Step 1: Create New Web Service

1. Go to your Render Dashboard
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository (if not already connected)
4. Select your repository

### Step 2: Configure Backend Settings

Fill in the following settings:

| Field | Value |
|-------|-------|
| **Name** | `braymont-backend` (or your preferred name) |
| **Environment** | `Node` |
| **Region** | Choose closest to your users (e.g., `Oregon (US West)`) |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | `backend` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |
| **Instance Type** | `Free` (or upgrade for better performance) |

### Step 3: Add Environment Variables

Click on **"Environment"** tab and add these variables:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | `mongodb+srv://info_db_user:4yd0ISw7yeMBEPaR@cluster0.wquhkij.mongodb.net/?appName=Cluster0` |
| `NODE_ENV` | `production` |

**Note:** Render automatically provides `PORT` environment variable, so you don't need to set it manually.

### Step 4: Deploy

1. Click **"Create Web Service"**
2. Render will start building and deploying your backend
3. Wait for deployment to complete (usually 2-5 minutes)
4. Once deployed, you'll get a URL like: `https://braymont-backend.onrender.com`

**Important:** Copy this backend URL - you'll need it for the frontend!

---

## 🎨 Frontend Deployment (Static Site)

### Step 1: Update Frontend Configuration

Before deploying, make sure your frontend is configured to use the backend URL.

### Step 2: Create/Update Static Site

1. Go to your Render Dashboard
2. Click **"New +"** → **"Static Site"** (or edit existing one)
3. Select your repository

### Step 3: Configure Frontend Settings

Fill in the following settings:

| Field | Value |
|-------|-------|
| **Name** | `braymont-frontend` (or your preferred name) |
| **Branch** | `main` (or your default branch) |
| **Root Directory** | `frontend` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

### Step 4: Add Environment Variables

Click on **"Environment"** tab and add:

| Key | Value |
|-----|-------|
| `VITE_API_BASE_URL` | `https://braymont-backend.onrender.com` (use your actual backend URL) |

**Important:** Replace `braymont-backend.onrender.com` with your actual backend service URL from Step 4 of backend deployment.

### Step 5: Deploy

1. Click **"Create Static Site"** (or **"Save Changes"** if updating)
2. Render will build and deploy your frontend
3. Once deployed, you'll get a URL like: `https://braymont-frontend.onrender.com`

---

## 🔗 Connecting Frontend to Backend

After both are deployed:

1. **Backend URL:** `https://braymontassetgroup-backend.onrender.com`
2. **Frontend Environment Variable:** Set `VITE_API_BASE_URL` to your backend URL
3. **Redeploy Frontend:** After updating the environment variable, Render will automatically redeploy

---

## 🌐 Custom Domain Setup

### For Custom Domain `https://braymontassetgroup.com`

**Backend Configuration:**
1. The backend CORS is already configured to allow `https://braymontassetgroup.com` and `https://www.braymontassetgroup.com`
2. If you set up a custom domain for the backend (e.g., `api.braymontassetgroup.com`), add it to the CORS origins in `backend/server.js`

**Frontend Configuration:**
1. In Render Dashboard → Frontend Service → Environment Variables
2. Set `VITE_API_BASE_URL` based on your setup:
   - **Option A:** If backend has custom domain: `https://api.braymontassetgroup.com`
   - **Option B:** If using Render URL: `https://braymontassetgroup-backend.onrender.com`
   - **Option C:** If using same domain with path routing: `https://braymontassetgroup.com`

**Important Notes:**
- The backend CORS configuration in `server.js` already includes `https://braymontassetgroup.com`
- After updating environment variables, Render will auto-redeploy
- Test the connection by submitting a form and checking browser console for errors

---

## ✅ Verification Steps

### Test Backend

1. Visit: `https://braymont-backend.onrender.com/api/health`
2. You should see: `{"status":"OK","message":"Server is running"}`

### Test Frontend

1. Visit your frontend URL
2. Try submitting a form
3. Check backend logs in Render dashboard to confirm data is being saved

---

## 🐛 Troubleshooting

### Backend Issues

**Problem:** Backend won't start
- **Solution:** Check logs in Render dashboard. Ensure `MONGODB_URI` is set correctly.

**Problem:** MongoDB connection fails
- **Solution:** 
  - Verify MongoDB connection string is correct
  - Check if MongoDB Atlas allows connections from Render's IP (may need to whitelist `0.0.0.0/0`)

**Problem:** CORS errors
- **Solution:** Backend already has CORS enabled, but if issues persist, check that frontend URL is allowed.

### Frontend Issues

**Problem:** Forms not submitting
- **Solution:** 
  - Verify `VITE_API_BASE_URL` is set correctly in frontend environment variables
  - Check browser console for errors
  - Ensure backend URL is accessible (test `/api/health` endpoint)

**Problem:** Build fails
- **Solution:** 
  - Check build logs in Render dashboard
  - Ensure all dependencies are in `package.json`
  - Verify `Root Directory` is set to `frontend`

---

## 📝 Environment Variables Summary

### Backend Environment Variables
```
MONGODB_URI=mongodb+srv://info_db_user:4yd0ISw7yeMBEPaR@cluster0.wquhkij.mongodb.net/?appName=Cluster0
NODE_ENV=production
```

### Frontend Environment Variables
```
VITE_API_BASE_URL=https://braymontassetgroup-backend.onrender.com
```
**For Custom Domain Setup:**
- If your backend is accessible via custom domain (e.g., `https://api.braymontassetgroup.com`), use that instead
- Or if using the same domain with path routing, use `https://braymontassetgroup.com`

---

## 🔄 Auto-Deploy

Both services are configured for **auto-deploy**:
- Any push to the `main` branch will trigger a new deployment
- You can disable this in service settings if needed

---

## 💡 Pro Tips

1. **Free Tier Limitations:**
   - Services spin down after 15 minutes of inactivity
   - First request after spin-down may take 30-60 seconds
   - Consider upgrading for production use

2. **Custom Domains:**
   - You can add custom domains in Render dashboard
   - Update `VITE_API_BASE_URL` if backend domain changes

3. **Monitoring:**
   - Check Render dashboard logs regularly
   - Set up email notifications for deployment failures

4. **Database:**
   - Consider setting up MongoDB Atlas IP whitelist to allow Render's IPs
   - Or use `0.0.0.0/0` for development (less secure)

---

## 📞 Support

If you encounter issues:
1. Check Render dashboard logs
2. Verify all environment variables are set correctly
3. Test backend health endpoint
4. Check browser console for frontend errors


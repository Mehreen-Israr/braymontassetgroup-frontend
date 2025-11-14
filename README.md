# Braymont Asset Group Website

A modern website for Braymont Asset Group built with React, Vite, and Tailwind CSS.

## Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   └── assets/         # Images and static assets
└── ...

backend/
├── server.js           # Express API server
└── ...
```

## Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create `.env` file** (optional, for custom API URL)
   ```
   VITE_API_BASE_URL=http://localhost:8000
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## Backend Setup

See [backend/README.md](backend/README.md) for detailed backend setup instructions.

## Deployment

📖 **For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)**

### Quick Reference

**Backend (Render - Web Service):**
- Root Directory: `backend`
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables:
  - `MONGODB_URI`: MongoDB connection string
  - `NODE_ENV`: `production`

**Frontend (Render - Static Site):**
- Root Directory: `frontend`
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Environment Variables:
  - `VITE_API_BASE_URL`: Your backend URL (e.g., `https://braymont-backend.onrender.com`)

## Features

- ✅ Responsive mobile navigation with hamburger menu
- ✅ Contact forms connected to MongoDB backend
- ✅ Quote request form on home page
- ✅ Contact form on contact page
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth animations with Framer Motion


# Braymont Asset Group Backend API

This is the backend API server for the Braymont Asset Group website. It handles form submissions and stores them in MongoDB.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the backend directory (or use the existing one):
   ```
   MONGODB_URI=mongodb+srv://info_db_user:4yd0ISw7yeMBEPaR@cluster0.wquhkij.mongodb.net/?appName=Cluster0
   PORT=8000
   ```

3. **Run the Server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

The server will run on `http://localhost:8000` by default.

## API Endpoints

### POST `/api/contact/request/`
Handles quote requests from the "Get in Touch" form on the home page.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "area_size": "1000 sq ft",
  "budget": "$500,000",
  "message": "I'm interested in..."
}
```

### POST `/api/contact/send/`
Handles contact messages from the Contact page.

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Inquiry",
  "message": "Hello, I have a question..."
}
```

### GET `/api/health`
Health check endpoint to verify the server is running.

## MongoDB Collections

- `quoterequests` - Stores quote request submissions
- `contactmessages` - Stores contact form submissions


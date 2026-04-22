# Braymont Asset Group Backend API

Backend API for form submissions (quote requests and contact messages), with support for:

- standard Node/Express runtime (`npm start`) for local/Render
- AWS SAM deployment (Lambda + API Gateway)
- Serverless Framework deployment (Lambda + API Gateway)

## Local Setup (Node/Render Style)

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
2. Create `.env` file:
   ```env
   MONGODB_URI=your-mongodb-uri
   PORT=8000
   CORS_ORIGINS=https://braymontassetgroup.com,https://www.braymontassetgroup.com,http://localhost:5173
   ```
3. Run backend:
   ```bash
   npm start
   ```

For autoreload during development:
```bash
npm run dev
```

## Deploy With AWS SAM

Prerequisites:
- AWS CLI configured (`aws configure`)
- SAM CLI installed

1. Build:
   ```bash
   npm run sam:build
   ```
2. First deploy (guided):
   ```bash
   npm run sam:deploy:guided
   ```
3. Set parameter values during guided deploy:
   - `MongodbUri` -> your MongoDB URI
   - `CorsOrigins` -> comma-separated origins allowed to call API
4. For local SAM testing:
   - update `env.local.json` with your values
   - run:
     ```bash
     npm run sam:local
     ```

## Deploy With Serverless Framework

Prerequisites:
- AWS CLI configured (`aws configure`)

1. Export env vars in your terminal:
   ```bash
   export MONGODB_URI="your-mongodb-uri"
   export CORS_ORIGINS="https://braymontassetgroup.com,https://www.braymontassetgroup.com,http://localhost:5173"
   ```
   On PowerShell:
   ```powershell
   $env:MONGODB_URI="your-mongodb-uri"
   $env:CORS_ORIGINS="https://braymontassetgroup.com,https://www.braymontassetgroup.com,http://localhost:5173"
   ```
2. Deploy:
   ```bash
   npm run sls:deploy
   ```
3. Remove stack when done:
   ```bash
   npm run sls:remove
   ```

## Keeping Render Untouched

- Render can continue deploying `main` exactly the same way as before.
- Practice SAM/Serverless from your backup branch only.
- Do not merge this branch into `main` until you decide to.

## API Endpoints

- `POST /api/contact/request/`
- `POST /api/contact/send/`
- `GET /api/health`

## MongoDB Collections

- `quoterequests`
- `contactmessages`


import serverless from 'serverless-http';
import { app, startServer } from './src/app.js';

let isInitialized = false;
const handler = serverless(app);

export const api = async (event, context) => {
  if (!isInitialized) {
    try {
      await startServer();
    } catch (error) {
      console.error('Lambda startup error:', error);
    }
    isInitialized = true;
  }

  return handler(event, context);
};

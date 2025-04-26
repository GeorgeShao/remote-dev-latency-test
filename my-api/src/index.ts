import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from Next.js app
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Basic API endpoint
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ 
    message: 'Hello from the API!',
    serverTime: Date.now()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

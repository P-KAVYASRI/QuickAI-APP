import express from 'express';
import cors from 'cors';    
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';

const app = express();  

// ✅ Debug check for Clerk keys
console.log("Clerk Publishable Key:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("Clerk Secret Key:", process.env.CLERK_SECRET_KEY ? "Loaded ✅" : "Missing ❌");

app.use(cors());
app.use(express.json());   
app.use(clerkMiddleware());  

app.get('/', (req, res) => 
   res.send('Server is Live!')
);

app.use(requireAuth());
app.use('/api/ai', aiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});

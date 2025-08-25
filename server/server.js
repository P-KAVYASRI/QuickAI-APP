import express from 'express';
import cors from 'cors';    
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express';
import aiRouter from './routes/aiRoutes.js';
import sql from './configs/db.js';  // 👈 import database

const app = express();  

// ✅ Debug check for Clerk keys
console.log("Clerk Publishable Key:", process.env.CLERK_PUBLISHABLE_KEY);
console.log("Clerk Secret Key:", process.env.CLERK_SECRET_KEY ? "Loaded ✅" : "Missing ❌");

app.use(cors());
app.use(express.json());   
app.use(clerkMiddleware());  

app.get('/', (req, res) => 
   res.send('Server is Live! 🚀')
);

// ✅ DB Test Route
app.get('/test-db', async (req, res) => {
    try {
        const result = await sql`SELECT NOW()`;
        res.json({ time: result[0].now });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database connection failed ❌" });
    }
});

app.use(requireAuth());
app.use('/api/ai', aiRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});

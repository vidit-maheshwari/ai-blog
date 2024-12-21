import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import router from './routes/post.routes.js';


dotenv.config( );
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/posts', router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
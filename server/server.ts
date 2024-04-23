require("dotenv").config();
// src/app.ts

import express from 'express';
import authRoutes from './routes/authRoutes';
import recipeRoutes from './routes/recipeRoutes';

const connectDB = require("./db/conn");
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1', recipeRoutes);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();


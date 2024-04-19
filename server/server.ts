require("dotenv").config();
// src/app.ts

import express from 'express';
import authRoutes from './routes/authRoutes';
const connectDB = require("./db/conn");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', authRoutes);

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


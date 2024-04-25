require("dotenv").config();
import express from 'express';
import authRoutes from './routes/authRoutes';
import recipeRoutes from './routes/recipeRoutes';
import {Authenticate} from "./middleware/authenticate"
import {admin} from "./controllers/authRouteController"
const connectDB = require("./db/conn");
import cors from 'cors';
import cookieParser from "cookie-parser"


const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(cookieParser());
app.use(express.json());
app.use('/api/v1', authRoutes);
app.use('/api/v1', recipeRoutes);
app.get("/api/v1/admin", Authenticate,admin);


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


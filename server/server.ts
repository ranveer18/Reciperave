require("dotenv").config();
const express = require("express");
const app = express();
import { Request, Response } from 'express';
const connectDB = require("./db/conn");

app.use("/", ( req:Request,res:Response) => {
  res.send("reciperave");
});

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
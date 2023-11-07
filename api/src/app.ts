import express, { Request, Response } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import bluebird from "bluebird";
import { DB_URI } from "./utils/secrets";

// instance of express
const app = express();

// middlewares
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

mongoose.Promise = bluebird;
const mongodb_uri = DB_URI!

// db connection
mongoose
  .connect(mongodb_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } as ConnectOptions)
  .then(() => {
    console.log("db connection establlished");
  })
  .catch((err) => {
    throw err;
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

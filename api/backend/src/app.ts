import express, { Request, Response } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import bluebird from "bluebird";
import { DB_URI } from "./utils/secrets";
import authRoute from "./routes/Auth/Auth";
import communityRoute from "./routes/Community/Community";
import bookingRoute from "./routes/Booking/Booking";
import { auth } from "./utils/middlewares";

// instance of express
const app = express();

// middlewares
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// route middlewares
app.use("/api", authRoute);
app.use("/api", auth, communityRoute);
app.use("/api", auth, bookingRoute);

mongoose.Promise = bluebird;
const mongodb_uri = DB_URI! || "mongodb://localhost:27017/workmate";

// db connection
mongoose
  .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
  .then(() => {
    console.log("db connection establlished");
  })
  .catch((err) => {
    throw err;
  });

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

import express, { Request, Response } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import bluebird from "bluebird";
import { DB_URI } from "./utils/secrets";
import authRoute from "./routes/AuthRoute/Auth";
import communityRoute from "./routes/CommunityRoute/Community";
import bookingRoute from "./routes/BookingRoute/Booking";
import { auth } from "./utils/middlewares";
import swaggerUI from "swagger-ui-express";
import * as swaggerDoc from "./swagger-out.json";

// instance of express
const app = express();

// middlewares
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

// route middlewares
app.use("/api/auth", authRoute);
app.use("/api/community",auth, communityRoute);
app.use("/api/bookings", auth, bookingRoute);

// swagger ui doc
app.use("/api", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

mongoose.Promise = bluebird;
const mongodb_uri = DB_URI! 

// db connection
mongoose
  .connect(mongodb_uri, { useNewUrlParser: true, useUnifiedTopology: true, ssl: true } as ConnectOptions)
  .then(() => {
    console.log("db connection establlished");
  })
  .catch((err) => {
    throw err;
  });

// test route
app.get("/", (req: Request, res: Response) => {
  res.send("Workmate backend!");
});

export default app;

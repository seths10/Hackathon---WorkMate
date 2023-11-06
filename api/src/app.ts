import express, { Request, Response } from "express";
import cors from "cors";

// instance of express
const app = express();


// middlewares
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;

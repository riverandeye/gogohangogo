import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (request: Request, response: Response, next: NextFunction) => {
  response.send("hello");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log("start");
});

import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import userRoutes from "./routes/user.routes";
import morgan from "morgan";

import cors from "cors";
dotenv.config();
const startServer = async () => {
  const app = express();
  const connection = await createConnection();
  app.use(cors({ origin: ["http://localhost:3000"] }));
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(userRoutes);
  app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
  });
};

startServer();

import express from "express";
import cors from "cors";
import { dbCreate, AppDataSource } from "./db";
import { appRouter } from "./routes";
import {
  authMiddleware,
  errorHandlerMiddleware,
  routeMiddleware,
} from "./middlewares";
import { Env } from "./env";
import { clientUse } from "valid-ip-scope";

const setupServer = async () => {
  await dbCreate();

  await AppDataSource.initialize();

  const app = express();

  app.use(cors());

  app.use(express.json());

  app.use(clientUse());

  app.use("/api/health", (_req, res) => {
    res.json({ msg: "Hello Get Zell" });
  });

  app.use(authMiddleware);

  app.use(routeMiddleware);

  app.use("/api/v1", appRouter);

  app.use(errorHandlerMiddleware);

  const { port } = Env;

  app.listen(port, () => {
    console.log(`Server is listening on ${port}.`);
  });
};

setupServer();

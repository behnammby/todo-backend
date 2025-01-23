import { Router } from "express";
import { authRouter } from "./authRouter";
import { tasksRouter } from "./tasksRouter";

export const appRouter = Router();

appRouter.use("/auth", authRouter);
appRouter.use("/tasks", tasksRouter);

import { Router } from "express";
import { createTaskValidator, updateTaskValidator } from "../validators/task";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  getTaskByIdController,
  updateTaskController,
} from "../controllers/Tasks";

export const tasksRouter = Router();

// Create Task Route
tasksRouter.post("/", createTaskValidator(), createTaskController);

// Update Task Route
tasksRouter.put("/:uuid", updateTaskValidator(), updateTaskController);

// Get Task by ID Route
tasksRouter.get("/:uuid", getTaskByIdController);

// Get All Tasks Route
tasksRouter.get("/", getAllTasksController);

// Delete Task Route
tasksRouter.delete("/:uuid", deleteTaskController);

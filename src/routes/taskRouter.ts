import { Router } from "express";
import { createTaskValidator, updateTaskValidator } from "../validators/task";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  getTaskByIdController,
  updateTaskController,
} from "../controllers/Task";

export const taskRouter = Router();

// Create Task Route
taskRouter.post("/tasks", createTaskValidator(), createTaskController);

// Update Task Route
taskRouter.put("/tasks/:uuid", updateTaskValidator(), updateTaskController);

// Get Task by ID Route
taskRouter.get("/tasks/:uuid", getTaskByIdController);

// Get All Tasks Route
taskRouter.get("/tasks", getAllTasksController);

// Delete Task Route
taskRouter.delete("/tasks/:uuid", deleteTaskController);

export default taskRouter;

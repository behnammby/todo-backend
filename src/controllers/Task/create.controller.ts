import { createTask } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils"; // Adjust the import path as necessary
import httpStatus from "http-status";

const createTaskHandler = async (req, res) => {
  const taskData = req.body;
  const task = await createTask(taskData); // Assume taskService has a createTask method
  res.status(httpStatus.CREATED).json({ task });
};

export const createTaskController = errorHandlerWrapper(createTaskHandler);

import { updateTask } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const updateTaskHandler = async (req, res) => {
  const { uuid } = req.params;
  const taskData = req.body;
  const updatedTask = await updateTask(uuid, taskData);
  res.status(httpStatus.OK).json({ updatedTask });
};

export const updateTaskController = errorHandlerWrapper(updateTaskHandler);

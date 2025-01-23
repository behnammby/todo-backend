import { getAllTasks } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const getAllTasksHandler = async (req, res) => {
  const tasks = await getAllTasks();
  res.status(httpStatus.OK).json({ tasks });
};

export const getAllTasksController = errorHandlerWrapper(getAllTasksHandler);

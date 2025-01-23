import { deleteTask } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const deleteTaskHandler = async (req, res) => {
  const { uuid } = req.params;
  await deleteTask(uuid);
  res.status(httpStatus.NO_CONTENT).send();
};

export const deleteTaskController = errorHandlerWrapper(deleteTaskHandler);

import { getTaskById } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const getTaskByIdHandler = async (req, res) => {
  const { uuid } = req.params;
  const task = await getTaskById(uuid);

  if (!task) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Task not found" });
  }
  res.status(httpStatus.OK).json({ task });
};

export const getTaskByIdController = errorHandlerWrapper(getTaskByIdHandler);

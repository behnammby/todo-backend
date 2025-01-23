import { UserEntity } from "../../entities";
import { getTaskById } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const getTaskByIdHandler = async (req, res) => {
  const { uuid } = req.params;
  const task = await getTaskById(uuid, req.user as UserEntity);

  if (!task) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "Task not found" });
  }
  res.status(httpStatus.OK).json({ ...task, user: undefined });
};

export const getTaskByIdController = errorHandlerWrapper(getTaskByIdHandler);

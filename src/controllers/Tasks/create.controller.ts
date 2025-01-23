import { UserEntity } from "../../entities";
import { createTask } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const createTaskHandler = async (req, res) => {
  const taskData = req.body;
  const task = await createTask({ ...taskData, user: req.user as UserEntity });

  res.status(httpStatus.CREATED).json({ ...task, user: undefined });
};

export const createTaskController = errorHandlerWrapper(createTaskHandler);

import { UserEntity } from "../../entities";
import { getAllTasks } from "../../services/task.service";
import { errorHandlerWrapper } from "../../utils";
import httpStatus from "http-status";

const getAllTasksHandler = async (req, res) => {
  const tasks = await getAllTasks(req.user as UserEntity);
  res.status(httpStatus.OK).json([
    ...tasks.map((t) => {
      return { ...t, user: undefined };
    }),
  ]);
};

export const getAllTasksController = errorHandlerWrapper(getAllTasksHandler);

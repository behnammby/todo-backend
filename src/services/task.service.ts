import { TaskEntity, UserEntity } from "../entities";
import { AppDataSource } from "../db";

/**
 * This operation allows you to create a new task.
 */
export const createTask = async (
  data: Omit<TaskEntity, "uuid" | "createdAt" | "deletedAt" | "updatedAt">
) => {
  const taskRepository = AppDataSource.getRepository(TaskEntity);

  const task = taskRepository.create({ ...data });
  await taskRepository.save(task);

  return task;
};

/**
 * These operation allows you to retrieve tasks by ID.
 */
export const getTaskById = async (uuid: string, user: UserEntity) => {
  const taskRepository = AppDataSource.getRepository(TaskEntity);
  const task = await taskRepository.findOneBy({
    uuid,
    user: { uuid: user.uuid },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

/**
 * These operation allows you to retrieve all tasks
 */
export const getAllTasks = async (user: UserEntity) => {
  const taskRepository = AppDataSource.getRepository(TaskEntity);

  const tasks = await taskRepository.find({
    where: { user: { uuid: user.uuid } },
    order: {
      createdAt: "desc",
    },
  });

  return tasks;
};

/**
 * This operation updates an existing task. Note that it also ensures that the uuid is not updated.
 */
export const updateTask = async (
  uuid: string,
  data: Partial<
    Omit<TaskEntity, "uuid" | "createdAt" | "deletedAt" | "updatedAt">
  >,
  user: UserEntity
) => {
  const taskRepository = AppDataSource.getRepository(TaskEntity);
  const task = await taskRepository.findOneBy({
    uuid,
    user: {
      uuid: user.uuid,
    },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  // Update the task with the new data
  Object.assign(task, data);
  await taskRepository.save(task);

  return task;
};

/**
 * This operation deletes a task by its ID.
 */
export const deleteTask = async (uuid: string, user: UserEntity) => {
  const taskRepository = AppDataSource.getRepository(TaskEntity);
  const task = await taskRepository.findOneBy({
    uuid,
    user: { uuid: user.uuid },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  await taskRepository.remove(task);
};

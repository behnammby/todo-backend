import { UserEntity } from "../entities";
import { AppDataSource } from "../db";

export const createUser = async (
  data: Omit<
    UserEntity,
    "uuid" | "createdAt" | "deletedAt" | "updatedAt" | "tasks"
  >
) => {
  const { username, email, password } = data;

  const userRepository = AppDataSource.getRepository(UserEntity);

  const existingUser = await userRepository.findOne({
    where: { email },
  });

  if (existingUser) {
    return null;
  }

  const user = userRepository.create({ username, email, password });
  await userRepository.save(user);

  return user;
};

export const getOneUser = async (data) => {
  const userRepository = AppDataSource.getRepository(UserEntity);
  const findUser = await userRepository.findOne({ where: { ...data } });

  if (!findUser) {
    return null;
  }

  return findUser;
};

export const getUserWithTasks = async (data) => {
  const userRepository = AppDataSource.getRepository(UserEntity);
  const findUser = await userRepository.findOne({
    where: { ...data },
    relations: {
      tasks: true,
    },
  });

  if (!findUser) {
    return null;
  }

  return findUser;
};

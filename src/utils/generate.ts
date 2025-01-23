import { Env } from "../env";
import jwt from "jsonwebtoken";

export const generateToken = (uuid: string) => {
  // console.log("--------uuid :>> ", uuid);
  const { secretKey, expiresIn } = Env;

  // console.log("secretKey :>> ", secretKey);
  // console.log("expiresIn :>> ", expiresIn);

  const token = jwt.sign({ uuid }, secretKey || "express", {
    expiresIn,
  });
  // console.log("------generatedToken :>> ", token);

  return `Bearer ${token}`;
};

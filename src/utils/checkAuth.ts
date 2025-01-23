import { NextFunction, Request, Response } from "express";
import { Env } from "../env";
import jwt from "jsonwebtoken";
import { PayloadType } from "../types";
import { userService } from "../services";
import { UnauthorizedError } from "../errors/unauthorized.error";
import { UserEntity } from "../entities";

export const checkAuth = async (
  req: Request & { user?: UserEntity },
  _res: Response,
  next: NextFunction
) => {
  try {
    // Check to see if auth header exists
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      throw new UnauthorizedError("No token provided");
    }

    const { secretKey } = Env;
    const token = authHeader.replace("Bearer ", "");

    const { id } = jwt.verify(token, secretKey) as PayloadType;

    const user = await userService.getOneUser({ id });
    if (!user) {
      throw new UnauthorizedError("User not found");
    }

    req.user = { ...user };

    next();
  } catch (error) {
    // next(new UnauthorizedError("Token is invalid"));
    if (error instanceof jwt.JsonWebTokenError) {
      next(new UnauthorizedError("Token is invalid"));
    } else if (error instanceof jwt.TokenExpiredError) {
      next(new UnauthorizedError("Token has expired"));
    } else {
      next(error); // Handle other types of errors
    }
  }
};

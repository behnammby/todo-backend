import { checkAuth } from "../utils";
import { NextFunction, Request, Response } from "express";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log("req.path :>> ", req.path);

  // Define the paths that do not require authentication
  const publicPaths = ["/auth/register", "/auth/login"];

  // Check if the request path is one of the public paths
  if (publicPaths.some((path) => req.path.endsWith(path))) {
    return next(); // Allow access to public paths
  }

  // For all other paths, check authentication
  await checkAuth(req, res, next);
};

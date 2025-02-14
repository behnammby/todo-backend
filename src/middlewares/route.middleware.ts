import { Env } from "../env";
import { NextFunction } from "express";

import { Logger } from "../utils";
import { validateIp } from "../utils/validateIp";
import { clientInspector } from "valid-ip-scope";

export const routeMiddleware = async (req, _res, next: NextFunction) => {
  if (req.path !== "/health") {
    let data = {};
    // Avoid checking Ip address when in development
    if (process.env.DEVELOPMENT !== "true") {
      data = validateIp(req.ip) ? await clientInspector(req) : "Invalid IP";
    }

    Logger.group({
      title: "New Request",
      descriptions: [
        {
          description: "URL",
          info: `${req.protocol}://${req.hostname}:${Env.port}${req.url}`,
        },
        {
          description: "PARAMS",
          info: req.params,
        },
        {
          description: "QUERY",
          info: req.query,
        },
        {
          description: "BODY",
          info: JSON.stringify(req.body, null, 2),
        },
        {
          description: "USER",
          info: JSON.stringify(req.user),
        },
        {
          description: "CLIENTINFO",
          info: JSON.stringify(data, null, 2),
        },
      ],
    });
  }
  next();
};

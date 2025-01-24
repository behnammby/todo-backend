import { userService } from "../../services";
import { errorHandlerWrapper } from "../../utils";
import { generateToken } from "../../utils/generate";
import { comparePassword } from "../../utils/password";
import httpStatus from "http-status";

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.getOneUser({ email });
  // console.log("user :>> ", user);
  if (!user) {
    res.status(httpStatus.FORBIDDEN);
    return null;
  }

  if (user.deletedAt) {
    res.status(httpStatus.FORBIDDEN);

    return null;
  }

  const compare = await comparePassword(password, user.password);
  if (!compare) {
    res.status(httpStatus.FORBIDDEN);
    return null;
  }

  const token = generateToken(user.uuid);
  res
    .json({ token, username: user.username, email: user.email })
    .status(httpStatus.ACCEPTED);
};

export const loginController = errorHandlerWrapper(loginHandler);

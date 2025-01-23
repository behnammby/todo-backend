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
    return null;
  }

  if (user.deletedAt) {
    return null;
  }

  const compare = await comparePassword(password, user.password);
  if (!compare) {
    return null;
  }

  const token = generateToken(user.uuid);
  res.json({ token }).status(httpStatus.ACCEPTED);
};

export const loginController = errorHandlerWrapper(loginHandler);

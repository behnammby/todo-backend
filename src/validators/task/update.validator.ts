import { body } from "express-validator";

export const updateTaskValidator = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("Title must be a string.")
      .isLength({ max: 255 })
      .withMessage("Title cannot exceed 255 characters."),
    body("description")
      .optional()
      .isString()
      .withMessage("Description must be a string."),
    body("dueDate")
      .optional()
      .isISO8601()
      .withMessage("Due date must be a valid date."),
    body("completed")
      .optional()
      .isBoolean()
      .withMessage("Completed must be true or false"),
  ];
};

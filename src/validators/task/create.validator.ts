import { body } from "express-validator";

export const createTaskValidator = () => {
  return [
    body("title")
      .optional()
      .isString()
      .withMessage("Title must be a string.")
      .isLength({ max: 255 })
      .withMessage("Title cannot exceed 255 characters."),
    body("description")
      .exists()
      .withMessage("Description is required.")
      .isString()
      .withMessage("Description must be a string."),
    body("dueDate")
      .exists()
      .withMessage("Due date is required.")
      .isISO8601()
      .withMessage("Due date must be a valid date."),
    body("status")
      .optional()
      .isIn(["Pending", "InProgress", "Completed"]) // Assuming these are the possible statuses
      .withMessage(
        "Status must be one of 'Pending', 'InProgress', or 'Completed'."
      ),
    body("userId")
      .exists()
      .withMessage("User ID is required.")
      .isUUID()
      .withMessage("User ID must be a valid UUID."),
  ];
};

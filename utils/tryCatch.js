import { sendError } from "./response.js";

export const tryCatch = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    console.error(error);
    return sendError(res, 500, "An unexpected error occurred");
  }
};

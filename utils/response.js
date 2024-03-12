export const sendSuccess = (res, status = 200, data = {}, message = "") => {
  res.status(status).json({
    success: true,
    message,
    data,
  });
};

export const sendError = (
  res,
  status = 400,
  message = "An error occurred",
  errorDetails = {}
) => {
  res.status(status).json({
    success: false,
    message,
    error: errorDetails,
  });
};

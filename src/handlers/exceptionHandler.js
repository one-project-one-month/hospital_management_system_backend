export const responseExceptionHandler = (fn, errorStatusCode, message) => {
  return async (req, res) => {
    try {
      await fn(req, res);
    } catch (error) {
      console.error("[error] ", error);
      res.status(errorStatusCode).send({ message });
    }
  };
};

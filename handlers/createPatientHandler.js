export const createPatientHandler = (req) => {
  const { name } = req.body;
  return { name };
};

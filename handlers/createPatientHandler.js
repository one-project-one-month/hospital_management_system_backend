import { toTitle } from "../utils/index.js";

export const createPatientHandler = (req) => {
  const patientModel = {};
  for (const key in req.body) {
    const element = req.body[key];
    patientModel[toTitle(key)] = element;
  }
  return patientModel;
};

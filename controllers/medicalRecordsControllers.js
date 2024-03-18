import * as medicalRecordsService from "../services/medicalRecordsService.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";

export const getAllMedicalRecords = responseExceptionHandler(
  async (req, res) => {
    const medicalRecords = await medicalRecordsService.getAllMedicalRecords();
    return res.status(200).json({ data: medicalRecords });
  },
  500,
  "Unexpected server error occured"
);

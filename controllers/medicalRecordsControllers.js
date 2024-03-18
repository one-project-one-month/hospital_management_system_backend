import * as medicalRecordsService from "../services/medicalRecordsService.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";
import { createModelHandler } from "../handlers/createModelHandler.js";

export const getAllMedicalRecords = responseExceptionHandler(
  async (req, res) => {
    const medicalRecords = await medicalRecordsService.getAllMedicalRecords();
    return res.status(200).json({ data: medicalRecords });
  },
  500,
  "Unexpected server error occured"
);

export const createMedicalRecord = responseExceptionHandler(
  async (req, res) => {
    const newMedicalRecord = await medicalRecordsService.createMedicalRecord(
      createModelHandler(req.body)
    );
    // console.log(createModelHandler(req.body));
    return res.status(201).json({ data: newMedicalRecord });
  },
  500,
  "Unexpected server error occured"
);

import * as patientsService from "../services/patientsService.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";

export const getAllPatients = responseExceptionHandler(
  async (req, res) => {
    const rooms = await patientsService.getAllPatients();
    return res.status(200).json({ data: rooms });
  },
  500,
  "Unexpected server error occured"
);

export const createPatient = responseExceptionHandler(
  async (req, res) => {
    console.info("body ", req.body);
    const newPatient = await patientsService.createPatient(req.body);
    res.status(200).json({ data: newPatient });
  },
  500,
  "Unexpected server error occured"
);

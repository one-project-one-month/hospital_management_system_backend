import * as patientsService from "../services/patientsService.js";
import * as utils from "../utils/index.js";
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
    const newPatient = await patientsService.createPatient(req.body);
    return res.status(201).json({ data: newPatient });
  },
  500,
  "Unexpected server error occured"
);

export const getPatientByID = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    const patient = await patientsService.getPatient(id);
    return res.status(200).json({ data: patient });
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const deletePatient = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    await patientsService.deletePatient(id);
    return res.status(204).end();
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const updatePatient = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    const updatedPatient = await patientsService.updatePatient(id, req.body);
    return res.status(200).json({ data: updatedPatient });
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const findPatients = responseExceptionHandler(
  async (req, res) => {
    const patients = await patientsService.searchPatients(req.body);
    return res.status(200).json({ data: patients });
  },
  400,
  "Unexpected server error occured or supported data is not valid"
);

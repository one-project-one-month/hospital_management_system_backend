import { db } from "../db/postgres.js";

export const getAllPatients = async () => db.patient.findMany();

export const createPatient = async (patient) =>
  db.patient.create({
    data: { ...patient },
  });

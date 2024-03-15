import { db } from "../db/postgres.js";

export const getAllPatients = async () => db.patient.findMany();

export const getPatient = async (id) => db.patient.findFirst({ where: { id } });

export const createPatient = async (patient) =>
  db.patient.create({
    data: { ...patient },
  });

export const deletePatient = async (id) => db.patient.delete({ where: { id } });

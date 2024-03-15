import { db } from "../db/postgres.js";

export const getAllPatients = async () => db.patient.findMany();

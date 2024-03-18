import { db } from "../db/postgres.js";

export const getAllMedicalRecords = async () => db.medicalRecord.findMany();

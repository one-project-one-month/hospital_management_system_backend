import { db } from "../db/postgres.js";

export const getAllMedicalRecords = async () =>
  db.medicalRecord.findMany({
    include: {
      Diseases: true,
    }
  });

export const createMedicalRecord = async (medicalRecord) =>
  db.medicalRecord.create({
    data: { ...medicalRecord },
  });

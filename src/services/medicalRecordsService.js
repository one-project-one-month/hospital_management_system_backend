import {db} from "../db/postgres.js";

export const getAllMedicalRecords = async () =>
    db.medicalRecord.findMany({
        include: {
            Diseases: true,
            Patient: true
        },
    });

export const createMedicalRecord = async (medicalRecord) =>
    db.medicalRecord.create({
        data: {...medicalRecord},
    });

export const deleteMedicalRecord = async (Id) =>
    db.medicalRecord.delete({
        where: {Id},
    });

export const updateMedicalRecord = async (Id, medicalRecord) =>
    db.medicalRecord.update({
        where: {Id},
        data: {
            ...medicalRecord,
        },
    });

export const searchMedicalRecord = async (filters) =>
    db.medicalRecord.findMany({
        where: {...filters},
    });

import {db} from "../db/postgres.js";

export const getAllPatients = async () => db.patient.findMany();

export const getPatient = async (Id) => db.patient.findFirst({where: {Id}});

export const createPatient = async (patient) =>
    db.patient.create({
        data: {...patient},
    });

export const deletePatient = async (Id) => db.patient.delete({where: {Id}});

export const updatePatient = async (Id, patientData) =>
    db.patient.update({
        where: {Id},
        data: {...patientData},
    });

export const searchPatients = async (filters) =>
    db.patient.findMany({
        where: {...filters},
    });

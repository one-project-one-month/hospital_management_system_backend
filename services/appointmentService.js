import { db } from "../db/postgres.js";

export const getAllAppointment = async () => db.patient.findMany();

import { db } from "../db/postgres.js";

export const getAllAppointment = async () => db.appointment.findMany();

export const createAppointment = async (appointment) => {
  return db.appointment.create({ data: { ...appointment } });
};

export const editAppointment = async (Id, AppointmentData) =>
  db.appointment.update({
    where: { Id },
    data: {
      ...AppointmentData,
    },
  });

export const deleteAppointment = async (id) => {
  return db.appointment.delete({ where: { Id: id } });
};

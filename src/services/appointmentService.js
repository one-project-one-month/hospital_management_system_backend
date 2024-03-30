import {db} from "../db/postgres.js";

export const getAllAppointment = async () =>
    db.appointment.findMany({
        select: {
            Id: true,
            AppointmentDate: true,
            Status: true,
            IsCancel: true,
            Doctor: {
                select: {
                    Id: true,
                    DoctorName: true,
                    Specialist: {
                        select: {
                            Id: true,
                            Name: true,
                        },
                    },
                },
            },
            Patient: {
                select: {
                    Id: true,
                    Name: true,
                },
            },
            Room: {
                select: {
                    Id: true,
                    Name: true,
                },
            },
        },
    });

export const createAppointment = async (appointment) => {
    return db.appointment.create({data: {...appointment}});
};

export const editAppointment = async (Id, AppointmentData) =>
    db.appointment.update({
        where: {Id},
        data: {
            ...AppointmentData,
        },
    });

export const deleteAppointment = async (id) => {
    return db.appointment.delete({where: {Id: id}});
};

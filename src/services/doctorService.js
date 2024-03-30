import {db} from "../db/postgres.js";

export const getAllDoctor = async () =>
    db.doctor.findMany({
        select: {
            Id: true,
            DoctorName: true,
            Email: true,
            MobileNumber: true,
            SpecialistId: false,
            StartDuty: true,
            EndDuty: true,
            Specialist: {
                select: {
                    Id: true,
                    Name: true,
                },
            },
        },
    });

export const createDoctor = async (DoctorData) => {
    return db.doctor.create({data: {...DoctorData}});
};

export const editDoctor = async (Id, DoctorData) =>
    db.doctor.update({
        where: {Id},
        data: {
            ...DoctorData,
        },
    });

export const deleteDoctor = async (id) => {
    return db.doctor.delete({where: {Id: id}});
};

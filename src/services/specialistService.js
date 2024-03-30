import {db} from "../db/postgres.js";

export const getAllSpecialist = async () => db.doctorSpecialList.findMany();

export const createSpecialist = async (DoctorData) => {
    return db.doctorSpecialList.create({data: {...DoctorData}});
};

export const editSpecialist = async (Id, DoctorData) =>
    db.doctorSpecialList.update({
        where: {Id},
        data: {
            ...DoctorData,
        },
    });

export const deleteSpecialist = async (id) => {
    return db.doctorSpecialList.delete({where: {Id: id}});
};

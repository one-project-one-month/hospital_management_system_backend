import { db } from "../db/postgres.js";

export const getAllDiseases = async () => db.disease.findMany();

export const createDisease = async (Name) =>
  db.disease.create({ data: { Name } });

export const getDisease = async (Id) =>
  db.disease.findFirst({
    where: { Id },
  });

export const deleteDisease = async (Id) =>
  db.disease.delete({
    where: { Id },
  });

export const updateDisease = async (Id, Name) =>
  db.disease.update({
    where: { Id },
    data: { Name },
  });

export const searchDiseases = async (Name) =>
  db.disease.findFirst({ where: { Name } });

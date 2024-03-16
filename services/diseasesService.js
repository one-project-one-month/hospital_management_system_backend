import { db } from "../db/postgres.js";

export const getAllDiseases = async () => db.disease.findMany();

export const createDisease = async (name) => db.disease.create({ data: { name } });

export const getDisease = async (id) =>
  db.disease.findFirst({
    where: { id },
  });

export const deleteDisease = async (id) =>
  db.disease.delete({
    where: { id },
  });

export const updateDisease = async (id, name) =>
  db.disease.update({
    where: { id },
    data: { name },
  });

export const searchDiseases = async (name) =>
  db.disease.findFirst({ where: { name } });

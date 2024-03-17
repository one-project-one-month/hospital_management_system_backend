import { db } from "../db/postgres.js";

export const getAllRooms = async () => db.room.findMany();

export const createRoom = async (Name) => db.room.create({ data: { Name } });

export const getRoom = async (Id) =>
  db.room.findFirst({
    where: { Id },
  });

export const deleteRoom = async (Id) =>
  db.room.delete({
    where: { Id },
  });

export const updateRoom = async (Id, Name) =>
  db.room.update({
    where: { Id },
    data: { Name },
  });

export const searchRooms = async (Name) =>
  db.room.findFirst({ where: { Name } });

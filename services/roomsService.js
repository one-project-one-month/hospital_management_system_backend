import { db } from "../db/postgres.js";

export const getAllRooms = async () => db.room.findMany();

export const createRoom = async (name) => db.room.create({ data: { name } });

export const deleteRoom = async (id) =>
  db.room.delete({
    where: { id },
  });

export const updateRoom = async (id, name) =>
  db.room.update({
    where: { id },
    data: { name },
  });

export const searchRooms = async (name) =>
  db.room.findFirst({ where: { name } });

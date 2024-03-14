import { db } from "../db/postgres.js";

export const getAllRooms = async () => db.room.findMany();

import * as room from "../services/rooms.js";

export const getAllRooms = async (req, res) => {
  const rooms = await room.getAllRooms();
  return res.status(200).json({ rooms });
};

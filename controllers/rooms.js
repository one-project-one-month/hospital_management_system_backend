import * as room from "../services/rooms.js";

export const getAllRooms = async (req, res) => {
  const rooms = await room.getAllRooms();
  return res.status(200).json({ rooms });
};

export const createRoom = async (req, res) => {
  const roomName = req.body["name"];
  const newRoom = await room.createRoom(roomName);
  return res.status(201).json({ room: newRoom });
};

export const deleteRoom = async (req, res) => {
  const id = Number(req.params["id"]);
  await room.deleteRoom(id);
  return res.status(204).end();
};

export const updateRoom = async (req, res) => {
  const id = Number(req.params["id"]);
  const roomName = req.body["name"];
  const updatedRoom = await room.updateRoom(id, roomName);
  return res.status(200).json({ room: updatedRoom });
};

export const findRooms = async (req, res) => {
  const roomName = req.body["name"];
  console.log("room name", roomName);
  const foundRoom = await room.searchRooms(roomName);
  return res.status(200).json({ room: foundRoom });
};

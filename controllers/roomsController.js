import * as room from "../services/roomsService.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";

export const getAllRooms = responseExceptionHandler(
  async (req, res) => {
    const rooms = await room.getAllRooms();
    return res.status(200).json({ data: rooms });
  },
  500,
  "Unexpected server error occured"
);

export const createRoom = responseExceptionHandler(
  async (req, res) => {
    const roomName = req.body["name"];
    const newRoom = await room.createRoom(roomName);
    return res.status(201).json({ data: newRoom });
  },
  500,
  "Unexpected server error occured"
);

export const deleteRoom = responseExceptionHandler(
  async (req, res) => {
    const id = Number(req.params["id"]);
    await room.deleteRoom(id);
    return res.status(204).end();
  },
  500,
  "Unexpected server error occured"
);

export const updateRoom = responseExceptionHandler(
  async (req, res) => {
    const id = Number(req.params["id"]);
    const roomName = req.body["name"];
    const updatedRoom = await room.updateRoom(id, roomName);
    return res.status(200).json({ data: updatedRoom });
  },
  500,
  "Unexpected server error occured"
);

export const findRooms = responseExceptionHandler(
  async (req, res) => {
    const roomName = req.body["name"];
    const foundRoom = await room.searchRooms(roomName);
    return res.status(200).json({ data: foundRoom });
  },
  500,
  "Unexpected server error occured"
);

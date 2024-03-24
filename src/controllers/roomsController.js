import * as roomsService from "../services/roomsService.js";
import * as utils from "../utils/index.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";

export const getAllRooms = responseExceptionHandler(
  async (req, res) => {
    const rooms = await roomsService.getAllRooms();
    return res.status(200).json({ data: rooms });
  },
  500,
  "Unexpected server error occured"
);

export const getRoomByID = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    const room = await roomsService.getRoom(id);
    return res.status(200).json({ data: room });
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const createRoom = responseExceptionHandler(
  async (req, res) => {
    const roomName = utils.getFormData(req)("name");
    const newRoom = await roomsService.createRoom(roomName);
    return res.status(201).json({ data: newRoom });
  },
  500,
  "Unexpected server error occured"
);

export const deleteRoom = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    await roomsService.deleteRoom(id);
    return res.status(204).end();
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const updateRoom = responseExceptionHandler(
  async (req, res) => {
    const id = Number(utils.getFromURI(req)("id"));
    const roomName = utils.getFormData(req)("name");
    const updatedRoom = await roomsService.updateRoom(id, roomName);
    return res.status(200).json({ data: updatedRoom });
  },
  400,
  "Unexpected server error occured or supported ID is not valid"
);

export const findRooms = responseExceptionHandler(
  async (req, res) => {
    const roomName = utils.getFormData(req)("name");
    const foundRoom = await roomsService.searchRooms(roomName);
    return res.status(200).json({ data: foundRoom });
  },
  500,
  "Unexpected server error occured"
);

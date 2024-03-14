import express from "express";
import * as room from "../controllers/rooms.js";

const router = express.Router();

router.get("/", room.getAllRooms);

export default router;

import express from "express";
import * as room from "../controllers/rooms.js";

const router = express.Router();

router.get("/", room.getAllRooms);
router.post("/", room.createRoom);
router.put("/:id", room.updateRoom);
router.delete("/:id", room.deleteRoom);
router.get("/search/", room.findRooms);

export default router;

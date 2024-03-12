import { Router } from "express";
import { getDoctor } from "../controllers/doctorController.js";

const doctorRouter = Router();

doctorRouter.route("/").get(getDoctor);

export default doctorRouter;

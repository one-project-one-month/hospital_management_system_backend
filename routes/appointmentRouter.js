import { Router } from "express";
import { getAppointment } from "../controllers/appointmentController.js";

const appointmentRouter = Router();

appointmentRouter.route("/").get(getAppointment);

export default appointmentRouter;

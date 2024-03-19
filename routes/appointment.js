import { Router } from "express";
import * as appointment from "../controllers/appointmentController.js";

const appointmentRouter = Router();

appointmentRouter.get("/", appointment.getAllAppointment);

export default appointmentRouter;

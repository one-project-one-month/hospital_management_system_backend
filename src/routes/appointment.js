import { Router } from "express";
import * as appointment from "../controllers/appointmentController.js";

const appointmentRouter = Router();

appointmentRouter.get("/", appointment.getAllAppointment);
appointmentRouter.post("/", appointment.createAppointment);
// appointmentRouter.get("/search", appointment.findMedicalRecord);
appointmentRouter.put("/:id", appointment.editAppointment);
appointmentRouter.delete("/:id", appointment.deleteAppointment);

export default appointmentRouter;

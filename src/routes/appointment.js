import { Router } from "express";
import * as appointment from "../controllers/appointmentController.js";

const appointmentRouter = Router();

appointmentRouter.get("/", appointment.getAllAppointment);
appointmentRouter.post("/create", appointment.createAppointment);
// appointmentRouter.get("/search", appointment.findMedicalRecord);
appointmentRouter.put("/edit/:id", appointment.editAppointment);
appointmentRouter.delete("/delete/:id", appointment.deleteAppointment);

export default appointmentRouter;

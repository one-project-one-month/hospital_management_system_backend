import { Router } from "express";
import * as doctor from "../controllers/doctorController.js";

const doctorRouter = Router();

doctorRouter.get("/", doctor.getAllDoctor);
doctorRouter.post("/", doctor.createDoctor);
// doctorRouter.get("/search", doctor.findMedicalRecord);
doctorRouter.put("/:id", doctor.editDoctor);
doctorRouter.delete("/:id", doctor.deleteDoctor);

export default doctorRouter;

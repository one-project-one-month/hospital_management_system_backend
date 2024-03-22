import { Router } from "express";
import * as doctor from "../controllers/doctorController.js";

const doctorRouter = Router();

doctorRouter.get("/", doctor.getAllDoctor);
doctorRouter.post("/create", doctor.createDoctor);
// doctorRouter.get("/search", doctor.findMedicalRecord);
doctorRouter.put("/edit/:id", doctor.editDoctor);
doctorRouter.delete("/delete/:id", doctor.deleteDoctor);

export default doctorRouter;

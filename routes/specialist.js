import { Router } from "express";
import * as specialist from "../controllers/specialistController.js";

const specialistRouter = Router();

specialistRouter.get("/", specialist.getAllSpecialist);
specialistRouter.post("/create", specialist.createSpecialist);
// specialistRouter.get("/search", specialist.findMedicalRecord);
specialistRouter.put("/edit/:id", specialist.editSpecialist);
specialistRouter.delete("/delete/:id", specialist.deleteSpecialist);

export default specialistRouter;

import { Router } from "express";
import * as specialist from "../controllers/specialistController.js";

const specialistRouter = Router();

specialistRouter.get("/", specialist.getAllSpecialist);
specialistRouter.post("/", specialist.createSpecialist);
// specialistRouter.get("/search", specialist.findMedicalRecord);
specialistRouter.put("/:id", specialist.editSpecialist);
specialistRouter.delete("/:id", specialist.deleteSpecialist);

export default specialistRouter;

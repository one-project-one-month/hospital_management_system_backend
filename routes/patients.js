import { Router } from "express";
import * as patient from "../controllers/patientsController.js";

const router = Router();

router.get("/", patient.getAllPatients);
router.post("/", patient.createPatient);
router.get("/:id", patient.getPatientByID);
router.delete("/:id", patient.deletePatient);

export default router;

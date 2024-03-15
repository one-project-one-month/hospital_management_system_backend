import { Router } from "express";
import * as patient from "../controllers/patientsController.js";

const router = Router();

router.get("/", patient.getAllPatients);
router.post("/", patient.createPatient);
router.get("/search", patient.findPatients);
router.get("/:id", patient.getPatientByID);
router.delete("/:id", patient.deletePatient);
router.put("/:id", patient.updatePatient);

export default router;

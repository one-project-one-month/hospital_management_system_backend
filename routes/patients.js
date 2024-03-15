import { Router } from "express";
import * as patient from "../controllers/patientsController.js";

const router = Router();

router.get("/", patient.getAllPatients);
router.post("/", patient.createPatient);

export default router;

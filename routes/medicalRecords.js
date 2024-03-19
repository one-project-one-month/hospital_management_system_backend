import { Router } from "express";
import * as medicalRecords from "../controllers/medicalRecordsControllers.js";

const router = Router();

router.get("/", medicalRecords.getAllMedicalRecords);
router.post("/", medicalRecords.createMedicalRecord);
router.delete("/:id", medicalRecords.deleteMedicalRecord);

export default router;

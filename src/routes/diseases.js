import express from "express";
import * as disease from "../controllers/diseasesController.js";

const router = express.Router();

router.get("/", disease.getAllDiseases);
router.post("/", disease.createDisease);
router.get("/search/", disease.findDiseases);
router.get("/:id", disease.getDiseaseByID);
router.put("/:id", disease.updateDisease);
router.delete("/:id", disease.deleteDisease);

export default router;

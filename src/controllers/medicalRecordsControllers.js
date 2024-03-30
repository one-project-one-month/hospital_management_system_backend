import * as medicalRecordsService from "../services/medicalRecordsService.js";
import {responseExceptionHandler} from "../handlers/exceptionHandler.js";
import {createModelHandler} from "../handlers/createModelHandler.js";
import * as utils from "../utils/index.js";

export const getAllMedicalRecords = responseExceptionHandler(
    async (req, res) => {
        const medicalRecords = await medicalRecordsService.getAllMedicalRecords();
        return res.status(200).json({data: medicalRecords});
    },
    500,
    "Unexpected server error occured"
);

export const createMedicalRecord = responseExceptionHandler(
    async (req, res) => {
        const newMedicalRecord = await medicalRecordsService.createMedicalRecord(
            createModelHandler(req.body)
        );
        return res.status(201).json({data: newMedicalRecord});
    },
    500,
    "Unexpected server error occured"
);

export const deleteMedicalRecord = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const medicalRecord = await medicalRecordsService.deleteMedicalRecord(id);
        return res.status(200).json({data: medicalRecord});
    },
    400,
    "Unexpected server error occured or supported ID is not valid"
);

export const updateMedicalRecord = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const updatedMedicalRecord =
            await medicalRecordsService.updateMedicalRecord(
                id,
                createModelHandler(req.body)
            );
        return res.status(200).json({data: updatedMedicalRecord});
    },
    400,
    "Unexpected server error occured or supported ID is not valid"
);

export const findMedicalRecord = responseExceptionHandler(
    async (req, res) => {
        const medicalRecord = await medicalRecordsService.searchMedicalRecord(
            createModelHandler(req.body)
        );
        return res.status(200).json({data: medicalRecord});
    },
    400,
    "Unexpected server error occured or supported ID or data is not valid"
);

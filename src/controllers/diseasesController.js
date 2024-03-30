import * as diseasesService from "../services/diseasesService.js";
import * as utils from "../utils/index.js";
import {responseExceptionHandler} from "../handlers/exceptionHandler.js";

export const getAllDiseases = responseExceptionHandler(
    async (req, res) => {
        const diseases = await diseasesService.getAllDiseases();
        return res.status(200).json({data: diseases});
    },
    500,
    "Unexpected server error occured"
);

export const getDiseaseByID = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const disease = await diseasesService.getDisease(id);
        return res.status(200).json({data: disease});
    },
    400,
    "Unexpected server error occured or supported ID is not valid"
);

export const createDisease = responseExceptionHandler(
    async (req, res) => {
        const diseaseName = utils.getFormData(req)("name");
        const newDisease = await diseasesService.createDisease(diseaseName);
        return res.status(201).json({data: newDisease});
    },
    500,
    "Unexpected server error occured"
);

export const deleteDisease = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        await diseasesService.deleteDisease(id);
        return res.status(204).end();
    },
    400,
    "Unexpected server error occured or supported ID is not valid"
);

export const updateDisease = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const DiseaseName = utils.getFormData(req)("name");
        const updatedDisease = await diseasesService.updateDisease(id, DiseaseName);
        return res.status(200).json({data: updatedDisease});
    },
    400,
    "Unexpected server error occured or supported ID is not valid"
);

export const findDiseases = responseExceptionHandler(
    async (req, res) => {
        const DiseaseName = utils.getFormData(req)("name");
        const foundDisease = await diseasesService.searchDiseases(DiseaseName);
        return res.status(200).json({data: foundDisease});
    },
    500,
    "Unexpected server error occured"
);

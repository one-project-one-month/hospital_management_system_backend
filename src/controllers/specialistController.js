import * as specialistService from "../services/specialistService.js";
import * as utils from "../utils/index.js";
import {responseExceptionHandler} from "../handlers/exceptionHandler.js";
import {createModelHandler} from "../handlers/createModelHandler.js";

export const getAllSpecialist = responseExceptionHandler(
    async (req, res) => {
        const appointment = await specialistService.getAllSpecialist();
        return res.status(200).json({data: appointment});
    },
    500,
    "Unexpected server error occured"
);

export const createSpecialist = responseExceptionHandler(
    async (req, res) => {
        const result = await specialistService.createSpecialist(
            createModelHandler(req.body)
        );

        return res
            .status(201)
            .json({message: "Create Specialist Role Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

export const editSpecialist = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const result = await specialistService.editSpecialist(
            id,
            createModelHandler(req.body)
        );
        return res.status(200).json({data: result});
    },
    500,
    "Unexpected server error occured"
);

export const deleteSpecialist = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        // console.log(id);
        // console.log(typeof id);
        const result = await specialistService.deleteSpecialist(id);

        return res
            .status(200)
            .json({message: "Delete Appointment Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

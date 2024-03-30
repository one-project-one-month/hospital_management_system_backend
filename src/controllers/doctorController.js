import * as doctorService from "../services/doctorService.js";
import * as utils from "../utils/index.js";
import {responseExceptionHandler} from "../handlers/exceptionHandler.js";
import {createModelHandler} from "../handlers/createModelHandler.js";

export const getAllDoctor = responseExceptionHandler(
    async (req, res) => {
        const appointment = await doctorService.getAllDoctor();
        return res.status(200).json({data: appointment});
    },
    500,
    "Unexpected server error occured"
);

export const createDoctor = responseExceptionHandler(
    async (req, res) => {
        const result = await doctorService.createDoctor(
            createModelHandler(req.body)
        );

        return res
            .status(201)
            .json({message: "Create Appointment Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

export const editDoctor = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const result = await doctorService.editDoctor(
            id,
            createModelHandler(req.body)
        );
        return res.status(200).json({data: result});
    },
    500,
    "Unexpected server error occured"
);

export const deleteDoctor = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        // console.log(id);
        // console.log(typeof id);
        const result = await doctorService.deleteDoctor(id);

        return res
            .status(200)
            .json({message: "Delete Appointment Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

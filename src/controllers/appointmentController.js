import * as appointmentService from "../services/appointmentService.js";
import * as utils from "../utils/index.js";
import {responseExceptionHandler} from "../handlers/exceptionHandler.js";
import {createModelHandler} from "../handlers/createModelHandler.js";

export const getAllAppointment = responseExceptionHandler(
    async (req, res) => {
        const appointment = await appointmentService.getAllAppointment();
        return res.status(200).json({data: appointment});
    },
    500,
    "Unexpected server error occured"
);

export const createAppointment = responseExceptionHandler(
    async (req, res) => {
        const result = await appointmentService.createAppointment(
            createModelHandler(req.body)
        );

        return res
            .status(201)
            .json({message: "Create Appointment Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

export const editAppointment = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        const result = await appointmentService.editAppointment(
            id,
            createModelHandler(req.body)
        );
        return res.status(200).json({data: result});
    },
    500,
    "Unexpected server error occured"
);

export const deleteAppointment = responseExceptionHandler(
    async (req, res) => {
        const id = Number(utils.getFromURI(req)("id"));
        // console.log(id);
        // console.log(typeof id);
        const result = await appointmentService.deleteAppointment(id);

        return res
            .status(200)
            .json({message: "Delete Appointment Successfully", data: result});
    },
    500,
    "Unexpected server error occured"
);

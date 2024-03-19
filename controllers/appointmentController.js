import * as appointmentService from "../services/appointmentService.js";
// import * as utils from "../utils/index.js";
import { responseExceptionHandler } from "../handlers/exceptionHandler.js";

export const getAllAppointment = responseExceptionHandler(
  async (req, res) => {
    console.log(Date.now("D-M-Y"))
    const appointment = await appointmentService.getAllAppointment();
    return res.status(200).json({ data: appointment });
  },
  500,
  "Unexpected server error occured"
);

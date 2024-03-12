import { getAllData } from "../database/supabase_datasource.js";
import { sendError, sendSuccess } from "../utils/response.js";
import { tryCatch } from "../utils/tryCatch.js";

export const getAppointment = tryCatch(async (req, res) => {
  const { tableName } = req.body;
  const { data, error } = await getAllData(
    tableName,
    "doctor:doctor_id(doctor_id,doctor_name,email,mobile_number,position)"
  );
  //   console.log(data, error);
  if (error) {
    return sendError(res, 400, error);
  }
  sendSuccess(res, 200, data, "Success");
});

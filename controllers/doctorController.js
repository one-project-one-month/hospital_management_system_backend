import { getAllData } from "../database/supabase_datasource.js";
import { sendError, sendSuccess } from "../utils/response.js";
import { tryCatch } from "../utils/tryCatch.js";

export const getDoctor = tryCatch(async (req, res) => {
  const { tableName } = req.body;
  const { data, error } = await getAllData(tableName);
  //   console.log(data, error);
  if (error) {
    return sendError(res, 400, error);
  }
  sendSuccess(res, 200, data, "Success");
});

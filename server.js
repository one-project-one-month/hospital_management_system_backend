import express from "express";
import dotenv from "dotenv";
import doctorRouter from "./routes/doctorRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 3400;

app.use(express.json());

app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/doctor", doctorRouter);

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

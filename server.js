import express from "express";
import dotenv from "dotenv";
import roomsRouter from "./routes/rooms.js";
import patientsRouter from "./routes/patients.js";
import diseasesRouter from "./routes/diseases.js";
<<<<<<< HEAD
import appointmentRouter from "./routes/appointment.js";
=======
import medicalRecordsRouter from "./routes/medicalRecords.js";
>>>>>>> main

dotenv.config();
const port = process.env.PORT || 3400;
const app = express();

app.use(express.json());

app.use("/api/v1/rooms", roomsRouter);
app.use("/api/v1/patients", patientsRouter);
app.use("/api/v1/diseases", diseasesRouter);
<<<<<<< HEAD
app.use("/api/v1/appointment", appointmentRouter);
=======
app.use("/api/v1/medical-records", medicalRecordsRouter);
>>>>>>> main

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

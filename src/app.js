import express from "express";
import cors from "cors";
import roomsRouter from "./routes/rooms.js";
import patientsRouter from "./routes/patients.js";
import diseasesRouter from "./routes/diseases.js";
import appointmentRouter from "./routes/appointment.js";
import medicalRecordsRouter from "./routes/medicalRecords.js";
import doctorRouter from "./routes/doctor.js";
import specialistRouter from "./routes/specialist.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/rooms", roomsRouter);
app.use("/api/v1/patients", patientsRouter);
app.use("/api/v1/diseases", diseasesRouter);
app.use("/api/v1/medical-records", medicalRecordsRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/doctor-specialist", specialistRouter);
app.use("/api/v1/doctor", doctorRouter);

export default app;

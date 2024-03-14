import express from "express";
import dotenv from "dotenv";
import roomsRouter from "./routes/rooms.js";

dotenv.config();
const port = process.env.PORT || 3400;
const app = express();

app.use(express.json());

app.use("/api/v1/rooms", roomsRouter);

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
});

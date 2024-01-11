import express from "express";
import cors from "cors";
import mysql from "mysql2"
import userRoutes from "./mysql/userRoutes.js";
import profesorRoutes from "./Profesor/profesorRoutes.js";

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  return res.json("FROM BACKEND SIDE");
});

app.use("/usuarios", userRoutes);
app.use("/profesor", profesorRoutes);

app.listen(5000, () => {
  console.log("Listening 5000");
});

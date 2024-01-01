import express from "express";
import cors from "cors";
import mysql from "mysql2"
import userRoutes from "./mysql/userRoutes.js";

const app = express();

// app.use(express.json());
// app.use(corsMW());

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "5454",
//     database: "erasmus",
//   });

app.get("/", (req, res) => {
  return res.json("FROM BACKEND SIDE");
});

// app.get("/usuarios", (req, res) => {
//   const q = "SELECT * FROM usuarios";
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// });

app.use("/usuarios", userRoutes);

app.listen(5000, () => {
  console.log("Listening 5000");
});

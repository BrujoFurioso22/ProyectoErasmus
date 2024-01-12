import express from "express";
import {
  consultarRondasJuego1
} from "./juegosControllers.js";

const router = express.Router();

router.get("/juego1/rondas/:idestudiante", consultarRondasJuego1);

export default router;

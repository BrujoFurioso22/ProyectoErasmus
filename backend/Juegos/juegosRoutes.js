import express from "express";
import {
  consultarRondasJuego1,
  consultarAsignacionProfesorEstudiante,
  consultarConfJuego1,
  consultarImagenesJuego1
} from "./juegosControllers.js";

const router = express.Router();

router.get("/juego1/rondas/:idestudiante", consultarRondasJuego1);
router.get(
  "/profesorAsignado/:idestudiante",
  consultarAsignacionProfesorEstudiante
);
router.get(
  "/configuracion/juego1/:idprofesor",
  consultarConfJuego1
);
router.get(
  "/configuracion/imagenes/juego1",
  consultarImagenesJuego1
);

export default router;

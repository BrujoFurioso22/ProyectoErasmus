import express from "express";
import {
  consultarRondasJuego1,
  consultarAsignacionProfesorEstudiante,
  consultarConfJuego1,
  consultarImagenesJuego1,
  consultarConfJuego2,
  consultarImagenesJuego2,
  consultarConfJuego3,
  consultarImagenesJuego3,
  consultarConfJuego4,
  consultarImagenesJuego4,
  crearConfiguracionesJuegos1,
  crearConfiguracionesJuegos2,
  crearConfiguracionesJuegos3,
  crearConfiguracionesJuegos4,
} from "./juegosControllers.js";

const router = express.Router();

router.get("/juego1/rondas/:idestudiante", consultarRondasJuego1);
router.get(
  "/profesorAsignado/:idestudiante",
  consultarAsignacionProfesorEstudiante
);
router.get("/configuracion/juego1/:idprofesor", consultarConfJuego1);
router.get("/configuracion/imagenes/juego1", consultarImagenesJuego1);
router.get("/configuracion/juego2/:idprofesor", consultarConfJuego2);
router.get("/configuracion/imagenes/juego2", consultarImagenesJuego2);
router.get("/configuracion/juego3/:idprofesor", consultarConfJuego3);
router.get("/configuracion/imagenes/juego3", consultarImagenesJuego3);
router.get("/configuracion/juego4/:idprofesor", consultarConfJuego4);
router.get("/configuracion/imagenes/juego4", consultarImagenesJuego4);
router.post("/actualizarConfig1", crearConfiguracionesJuegos1);
router.post("/actualizarConfig2", crearConfiguracionesJuegos2);
router.post("/actualizarConfig3", crearConfiguracionesJuegos3);
router.post("/actualizarConfig4", crearConfiguracionesJuegos4);


export default router;

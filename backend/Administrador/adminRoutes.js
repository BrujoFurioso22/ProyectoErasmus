import express from "express";
import { ConsultarImagenesAdmin,EstadoImagenAdmin } from "./adminControllers.js";

const router = express.Router();

// Definir rutas
router.get("/consultarImagenes/:numJuego", ConsultarImagenesAdmin);
router.get("/consultarImagenes/:numJuego", ConsultarImagenesAdmin);
router.post("/cambiarEstadoImagenAdmin", EstadoImagenAdmin);

export default router;

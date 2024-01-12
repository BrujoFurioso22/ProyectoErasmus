import { db } from "../db.js";

export const consultarRondasJuego1 = (req, res) => {
  const estudianteID = req.params.idestudiante;
  const q = `SELECT estudiantes.idestudiantes,juego1.idjuego1,juego1.numRondas FROM baseerasmus.profesores, baseerasmus.asignados,baseerasmus.juego1,baseerasmus.estudiantes Where profesores.idprofesores=asignados.iddeprofesor and estudiantes.idestudiantes = asignados.iddeestudiante and estudiantes.idestudiantes = ${estudianteID} and profesores.idjdej1 = juego1.idjuego1 `;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const consultarAsignacionProfesorEstudiante = (req, res) => {
  const estudianteID = req.params.idestudiante;
  const q = `SELECT * FROM baseerasmus.asignados WHERE asignados.iddeestudiante = ${estudianteID} `;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
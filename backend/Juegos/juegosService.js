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
export const consultarConfJuego1 = (req, res) => {
  const profesorID = req.params.idprofesor;
  const q = `SELECT * FROM baseerasmus.juego1 WHERE juego1.idprofesor = ${profesorID} ;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const consultarImagenesJuego1 = (req, res) => {
  const q = `SELECT * FROM baseerasmus.imagenes WHERE imagenes.grupoimagen = 1`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const consultarConfJuego2 = (req, res) => {
  const profesorID = req.params.idprofesor;
  const q = `SELECT * FROM baseerasmus.juego2 WHERE juego2.idprofesor = ${profesorID} ;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const consultarImagenesJuego2 = (req, res) => {
  const q = `SELECT * FROM baseerasmus.imagenes WHERE imagenes.grupoimagen = 2`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const consultarConfJuego3 = (req, res) => {
  const profesorID = req.params.idprofesor;
  const q = `SELECT * FROM baseerasmus.juego3 WHERE juego3.idprofesor = ${profesorID} ;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const consultarImagenesJuego3 = (req, res) => {
  const q = `SELECT * FROM baseerasmus.imagenes WHERE imagenes.grupoimagen = 3`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
export const consultarConfJuego4 = (req, res) => {
  const profesorID = req.params.idprofesor;
  const q = `SELECT * FROM baseerasmus.juego4 WHERE juego4.idprofesor = ${profesorID} ;`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const consultarImagenesJuego4 = (req, res) => {
  const q = `SELECT * FROM baseerasmus.imagenes WHERE imagenes.grupoimagen = 4`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const crearConfiguracionesJuegos1 = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { idimg1, idimg2, idimg3, idimg4, numRondas, idprofesor } = req.body;
  const insertUserQuery1 = `UPDATE baseerasmus.juego1 SET juego1.img1 = '${idimg1}', juego1.img2 = '${idimg2}', juego1.img3 = '${idimg3}' ,juego1.img4 = '${idimg4}', juego1.numRondas = '${numRondas}' WHERE juego1.idprofesor = '${idprofesor}'`;
  db.query(insertUserQuery1, (insertErr, insertData) => {
    if (insertErr) return res.json(insertErr);
    return res.json({
      message: `Actualizada Correcta del Juego`,
      datas: { idimg1, idimg2, idimg3, idimg4, numRondas, idprofesor },
    });
  });
};
export const crearConfiguracionesJuegos2 = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const {
    idimg1,
    idimg2,
    idimg3,
    idimg4,
    idimg5,
    idimg6,
    idimg7,
    idimg8,
    idimg9,
    numCartas,
    idprofesor,
  } = req.body;
  const insertUserQuery1 = `UPDATE baseerasmus.juego2 SET juego2.img1 = '${idimg1}', juego2.img2 = '${idimg2}', juego2.img3 = '${idimg3}' ,juego2.img4 = '${idimg4}',juego2.img5 = '${idimg5}',juego2.img6 = '${idimg6}',juego2.img7 = '${idimg7}',juego2.img8 = '${idimg8}',juego2.img9 = '${idimg9}', juego2.numCartas = '${numCartas}' WHERE juego2.idprofesor = '${idprofesor}'`;
  db.query(insertUserQuery1, (insertErr, insertData) => {
    if (insertErr) return res.json(insertErr);
    return res.json({
      message: `Actualizada Correcta del Juego`,
      datas: {
        idimg1,
        idimg2,
        idimg3,
        idimg4,
        idimg5,
        idimg6,
        idimg7,
        idimg8,
        idimg9,
        numCartas,
        idprofesor,
      },
    });
  });
};
export const crearConfiguracionesJuegos3 = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { idimg1, idprofesor } = req.body;
  const insertUserQuery1 = `UPDATE baseerasmus.juego3 SET juego3.img1 = '${idimg1}' WHERE juego3.idprofesor = '${idprofesor}'`;
  db.query(insertUserQuery1, (insertErr, insertData) => {
    if (insertErr) return res.json(insertErr);
    return res.json({
      message: `Actualizada Correcta del Juego`,
      datas: { idimg1, idprofesor },
    });
  });
};
export const crearConfiguracionesJuegos4 = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { idimg1, idimg2, idimg3, velocidad, idcorrecto, idprofesor } = req.body;
  const insertUserQuery1 = `UPDATE baseerasmus.juego4 SET juego4.img1 = '${idimg1}', juego4.img2 = '${idimg2}', juego4.img3 = '${idimg3}', juego4.velocidad = '${velocidad}', juego4.idcorrecto = '${idcorrecto}' WHERE juego4.idprofesor = '${idprofesor}'`;
  db.query(insertUserQuery1, (insertErr, insertData) => {
    if (insertErr) return res.json(insertErr);
    return res.json({
      message: `Actualizada Correcta del Juego`,
      datas: { idimg1, idimg2, idimg3, velocidad, idcorrecto, idprofesor },
    });
  });
};

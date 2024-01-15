import { db } from "../db.js";

export const ConsultarImagenesAdmin = (req, res) => {
  const { numJuego } = req.params;
  const q = `SELECT * FROM baseerasmus.imagenes WHERE imagenes.grupoimagen = ${numJuego};`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const EstadoImagenAdmin = (req, res) => {
  const { idimagen, estado } = req.body;
  const q = `UPDATE baseerasmus.imagenes SET estado = ${estado} WHERE idimagenes = ${idimagen};`;
  db.query(q, [estado, idimagen], (err, data) => {
    if (err) return res.json(err);
    return res.json({
      message: "Cambio de estado de imagen correcta",
      correcta: 1,
      imagen: { idimagen, estado },
    });
  });
};

export const SubirImagen = (req, res, next) => {
  const { file } = req;
  const { juego } = req.params;

  // file.mv(`/erasmus/src/SOURCES/JUEGO${juego}/${file.name}`, (err) => {
  //   if (err) return res.status(500).send({ message: err });

  //   return res.status(200).send({ message: "Archivo Cargado Correctamente" });
  // });
};

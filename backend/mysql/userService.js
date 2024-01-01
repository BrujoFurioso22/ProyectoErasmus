import { db } from "../db.js";

export const getAllUsers = (req, res) => {
  const q = "SELECT * FROM usuarios";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getUserById = (req, res) => {
  const userId = req.params.id;
  const q = `SELECT * FROM usuarios WHERE idusuarios = ${userId}`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const validateUser = (req, res) => {
  const correo = req.params.correo;
  const contrasena = req.params.password;
  const q = `SELECT * FROM usuarios WHERE correo = '${correo}' and contrasena = '${contrasena}'`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const createUser = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { nombre, correo } = req.body;

  // Realizar la lógica para insertar un nuevo usuario en la base de datos
  const q = `INSERT INTO usuarios (nombre, correo) VALUES ('${nombre}', '${correo}')`;

  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json({
      message: "Usuario creado correctamente",
      usuario: { nombre, correo },
    });
  });
};
// Agregar más servicios según sea necesario

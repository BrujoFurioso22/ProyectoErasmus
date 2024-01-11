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
  const { nombre, tipo, correo, password, institucion, sexo } = req.body;

  // Verificar si el usuario ya existe
  const checkUserQuery = `SELECT * FROM usuarios WHERE correo = '${correo}'`;

  db.query(checkUserQuery, (checkErr, checkData) => {
    if (checkErr) return res.json(checkErr);

    // Si el usuario ya existe, devolver un mensaje de error
    if (checkData.length > 0) {
      return res.json({
        message: "1",
      });
    }

    // Si el usuario no existe, realizar la inserción en la base de datos
    const insertUserQuery = `INSERT INTO usuarios (nombre, correo, contrasena, tipodeusuario, institucion, sexo) VALUES ('${nombre}' ,'${correo}', '${password}', '${tipo}', '${institucion}' ,'${sexo}')`;

    db.query(insertUserQuery, (insertErr, insertData) => {
      if (insertErr) return res.json(insertErr);

      return res.json({
        message: "Usuario creado correctamente",
        usuario: { nombre, tipo, correo, password },
      });
    });
  });
};

// Agregar más servicios según sea necesario

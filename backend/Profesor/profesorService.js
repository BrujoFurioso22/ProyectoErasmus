import { db } from "../db.js";

export const consultarEstudiantes = (req, res) => {
  const profesorID = req.params.idprofesor;
  const q = `SELECT idestudiantes, estudiantes.nombre,estudiantes.correo, estudiantes.institucion, estudiantes.sexo FROM baseerasmus.profesores, baseerasmus.estudiantes, baseerasmus.asignados where profesores.idprofesores = asignados.iddeprofesor and estudiantes.idestudiantes = asignados.iddeestudiante and profesores.idprofesores = ${profesorID};`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};
// export const consultarIDProfesor = (req, res) => {
//   const usuarioID = req.params.idusuario;
//   const q = `SELECT idprofesores FROM baseerasmus.profesores, baseerasmus.usuarios where usuarios.idusuarios = profesores.iddeusuario and usuarios.idusuarios = ${usuarioID};`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// };
export const eliminarEstudiantedeProfesor = (req, res) => {
  const usuarioID = req.params.idusuario;
  const q = `SELECT idprofesores FROM baseerasmus.profesores, baseerasmus.usuarios where usuarios.idusuarios = profesores.iddeusuario and usuarios.idusuarios = ${usuarioID};`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const idUsuario = (req, res) => {
  const correo = req.params.correo;
  const q = `SELECT idestudiantes FROM estudiantes WHERE correo = '${correo}'`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const asignarEstudiantesAProfesor = (req, res) => {
  // Obtener datos del cuerpo de la solicitud
  const { idestudiante, idprofesor } = req.body;

  // Verificar si el usuario ya existe
  const checkUserQuery = `SELECT * FROM asignados WHERE iddeestudiante = '${idestudiante}' and iddeprofesor = '${idprofesor}'`;

  db.query(checkUserQuery, (checkErr, checkData) => {
    if (checkErr) return res.json(checkErr);

    // Si el usuario ya existe, devolver un mensaje de error
    if (checkData.length > 0) {
      return res.json({
        message: "Usuario ya asignado",
      });
    }

    // Si el usuario no existe, realizar la inserción en la base de datos
    const insertUserQuery = `INSERT INTO asignados (iddeestudiante, iddeprofesor) VALUES ('${idestudiante}' ,'${idprofesor}')`;

    db.query(insertUserQuery, (insertErr, insertData) => {
      if (insertErr) return res.json(insertErr);

      return res.json({
        message: "Asignacion creada correctamente",
        usuario: { idestudiante, idprofesor},
      });
    });
  });
};

// export const getUserById = (req, res) => {
//   const userId = req.params.id;
//   const q = `SELECT * FROM usuarios WHERE idusuarios = ${userId}`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// };

// export const validateUser = (req, res) => {
//   const correo = req.params.correo;
//   const contrasena = req.params.password;
//   const q = `SELECT * FROM usuarios WHERE correo = '${correo}' and contrasena = '${contrasena}'`;
//   db.query(q, (err, data) => {
//     if (err) return res.json(err);
//     return res.json(data);
//   });
// };

// export const createUser = (req, res) => {
//   // Obtener datos del cuerpo de la solicitud
//   const { nombre, tipo, correo, password } = req.body;

//   // Verificar si el usuario ya existe
//   const checkUserQuery = `SELECT * FROM usuarios WHERE correo = '${correo}'`;

//   db.query(checkUserQuery, (checkErr, checkData) => {
//     if (checkErr) return res.json(checkErr);

//     // Si el usuario ya existe, devolver un mensaje de error
//     if (checkData.length > 0) {
//       return res.json({
//         message: "1",
//       });
//     }

//     // Si el usuario no existe, realizar la inserción en la base de datos
//     const insertUserQuery = `INSERT INTO usuarios (nombre, correo, contrasena,tipodeusuario) VALUES ('${nombre}' ,'${correo}', '${password}', '${tipo}')`;

//     db.query(insertUserQuery, (insertErr, insertData) => {
//       if (insertErr) return res.json(insertErr);

//       return res.json({
//         message: "Usuario creado correctamente",
//         usuario: { nombre, tipo, correo, password },
//       });
//     });
//   });
// };

// Agregar más servicios según sea necesario

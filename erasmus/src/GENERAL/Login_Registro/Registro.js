import React, { useState } from "react";
import { Link } from "react-router-dom";
import usuarios from "usuarios.json";
import { LOGIN } from "CONFIG/ROUTES/paths";

const DatosEstudiante = {
  CORREO: "",
  NOMBRE: "",
  EDAD: "",
  CONTRASENA: "",
};
const DatosProfesor = {
  CORREO: "",
  NOMBRE: "",
  EDAD: "",
  CONTRASENA: "",
};

export const Registro = () => {
  const [usuario, setUsuario] = useState(DatosProfesor);
  const handleSubmit = (e) => {
    e.preventDefault();
    const valid = usuarios.some((item) => item.CORREO === usuario.CORREO);
    if (!valid) {
      console.table(usuario);
      usuarios.push(usuario);
    }
  };
  return (
    <div className="login-container">
      <Link className="link-register" to={LOGIN}>
        <label>Iniciar Sesion →</label>
      </Link>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label>REGISTRARSE</label>

          <input
            type="text"
            id="nombre"
            name="NOMBRE"
            className="input-field"
            placeholder="Nombre Completo"
            value={usuario.NOMBRE}
            onChange={(e) =>
              setUsuario((prev) => ({ ...prev, NOMBRE: e.target.value }))
            }
          />
          <input
            type="number"
            id="edad"
            name="EDAD"
            min={3}
            max={60}
            className="input-field"
            placeholder="Edad"
            value={usuario.EDAD}
            onChange={(e) =>
              setUsuario((prev) => ({ ...prev, EDAD: e.target.value }))
            }
          />
          <input
            type="text"
            id="correo"
            name="CORREO"
            className="input-field"
            placeholder="Correo o Usuario"
            value={usuario.CORREO}
            onChange={(e) =>
              setUsuario((prev) => ({ ...prev, CORREO: e.target.value }))
            }
          />
          <input
            type="password"
            id="contrasena"
            name="CONTRASENA"
            className="input-field"
            placeholder="Contraseña "
            value={usuario.CONTRASENA}
            onChange={(e) =>
              setUsuario((prev) => ({ ...prev, CONTRASENA: e.target.value }))
            }
          />
        </div>
        <input type="submit" className="submit-button" value="INGRESAR" />
      </form>
    </div>
  );
};

import React, { useState } from "react";
import { useAuthContext } from "CONFIG/context/context";
import "./LoginReg.css";
import { Link } from "react-router-dom";
import { REGISTRO } from "CONFIG/ROUTES/paths";
import { usuarios } from "usuarios";

export const Login = () => {
  const { login } = useAuthContext();
  const [usuario, setUsuario] = useState({ CORREO: "", CONTRASENA: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.table(usuarios);
    const valid = usuarios.some(
      (item) =>
        item.CORREO === usuario.CORREO && item.CONTRASENA === usuario.CONTRASENA
    );
    if (valid) {
      login(usuario);
    }
  };
  return (
    <div className="login-container">
      <Link className="link-register" to={REGISTRO}>
        <label>Registrarse →</label>
      </Link>
      <form onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label>LOGIN</label>
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

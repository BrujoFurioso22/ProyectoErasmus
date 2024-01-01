import React, { useState, useEffect } from "react";
import { useAuthContext } from "CONFIG/context/authcontext";
import { usuarios } from "usuarios";

import { LoginUsers } from "CONFIG/BACKEND/Consultas/LoginRegister";

export function InicioSesion() {
  const { login } = useAuthContext();
  const [usuario, setUsuario] = useState({
    correo: "",
    contrasena: "",
  });
  const [mensajeError, setMensajeError] = useState("");

  const ValidarInicioSesion = async (usuario, contrasena) => {
    try {
      const usuarios = await LoginUsers(usuario, contrasena);
      if (usuarios.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUsuario({
      ...usuario,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { correo, contrasena } = usuario;
    const valid = await ValidarInicioSesion(correo, contrasena);
    console.log(valid);
    if (valid) {
      login(usuario);
    } else {
      setMensajeError("Los datos no son correctos");
    }

    for (const key in usuario) {
      setUsuario({
        ...usuario,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="formLogin">
        <h1 className="h1Login">Iniciar Sesión</h1>
        <i className="fa-solid fa-house"></i>
        <input
          type="correo"
          placeholder="Correo"
          name="correo"
          value={usuario.correo}
          onChange={handleChange}
          className="inputLogin"
        />
        <input
          type="contrasena"
          name="contrasena"
          placeholder="Contraseña"
          value={usuario.contrasena}
          onChange={handleChange}
          className="inputLogin"
        />
        <span style={{ color: "red" }}>{mensajeError}</span>
        <a className="aLogin" href="/">
          Olvidaste tu contraseña?
        </a>
        <button className="botonLogin">Iniciar Sesión</button>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import { CrearUsuario } from "CONFIG/BACKEND/Consultas/LoginRegister";

export function Registrarse() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    tipo: "",
    email: "",
    password: "",
  });
  const [mensajeError, setMensajeError] = useState("");
  const [validacion, setValidacion] = useState(0);

  const CreacionUsuario = async () => {
    try {
      const validar = await CrearUsuario(
        usuario.nombre,
        usuario.tipo,
        usuario.email,
        usuario.password
      );
      if (validar.message === "1") {
        setMensajeError("El correo ya se encuentra registrado");
        setValidacion(0);
      } else {
        setMensajeError("Usuario Creado Correctamente");
        setValidacion(1);
      }
    } catch (err) {
      console.log(err);
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

    await CreacionUsuario();

    for (const key in usuario) {
      setUsuario({
        ...usuario,
        [key]: "",
      });
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="formLogin">
        <h1 className="h1Login">Crea una cuenta</h1>
        <input
          type="email"
          name="email"
          value={usuario.email}
          onChange={handleChange}
          placeholder="Correo"
          className="inputLogin"
        />
        <input
          type="password"
          name="password"
          value={usuario.password}
          onChange={handleChange}
          placeholder="Contraseña"
          className="inputLogin"
        />
        <input
          type="text"
          name="nombre"
          value={usuario.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          className="inputLogin"
        />
        <select
          type="text"
          name="tipo"
          value={usuario.tipo}
          onChange={handleChange}
          className="inputLogin"
        >
          <option value="">Seleccione tipo de usuario</option>
          <option value="EST">Estudiante</option>
          <option value="PR">Profesor</option>
        </select>
        <span style={validacion === 0 ? { color: "red" } : { color: "green" }}>
          {mensajeError}
        </span>
        <button className="botonLogin">Registrarse</button>
      </form>
    </div>
  );
}

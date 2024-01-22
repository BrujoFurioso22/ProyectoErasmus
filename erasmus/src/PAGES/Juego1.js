import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
import { Game1 } from "GENERAL/JUEGOS/Juego1Direcciones/Game1";
import { Game1Handtrack } from "GENERAL/JUEGOS/Juego1Direcciones/Game1Handtrack";
import {
  ContenedorPrincipal,
  ContenedorHome,
  ContenedorSecciones,
} from "STYLED-COMPONENTS/Estructura";
import { ConsultaSiTieneProfesor } from "CONFIG/BACKEND/Consultas/Juegos";
import { PaginaSinAsignacion } from "./PaginaSinAsignacion";

export const Juego1 = () => {
  const [asignado, setAsignado] = useState(false);

  const VerificarSiTieneProfesor = async () => {
    const resp = await ConsultaSiTieneProfesor(localStorage.getItem("id"));
    if (resp.length > 0) {
      setAsignado(true);
    }
  };
  useEffect(() => {
    VerificarSiTieneProfesor();
  }, []);

  return (
    <ContenedorPrincipal>
      <Sidebar />
      <ContenedorHome>
        <Header />
        <ContenedorSecciones>
          {asignado ? <Game1 /> : <PaginaSinAsignacion />}
          {/* {asignado ? <Game1Handtrack /> : <PaginaSinAsignacion />} */}
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};

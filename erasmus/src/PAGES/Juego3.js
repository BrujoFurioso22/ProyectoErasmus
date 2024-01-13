import React,{useEffect,useState} from "react";
import styled from "styled-components";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
import { JuegoLienzo } from "GENERAL/JUEGOS/Juego3Pizarra/JuegoLienzo";
import { CanvasApp } from "GENERAL/JUEGOS/Juego3Pizarra/Canvas";
import { JuegoPrueba } from "GENERAL/JUEGOS/Juego3Pizarra/JuegoPrueba";
import { ContenedorPrincipal, ContenedorHome,ContenedorSecciones } from "STYLED-COMPONENTS/Estructura";
import { ConsultaSiTieneProfesor } from "CONFIG/BACKEND/Consultas/Juegos";
import { PaginaSinAsignacion } from "./PaginaSinAsignacion"

export const Juego3 = () => {
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
        {asignado ? <CanvasApp /> : <PaginaSinAsignacion />}
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};

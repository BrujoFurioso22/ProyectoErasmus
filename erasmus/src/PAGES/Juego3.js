import React from "react";
import styled from "styled-components";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
import { JuegoLienzo } from "GENERAL/JUEGOS/Juego3Pizarra/JuegoLienzo";
import { JuegoPrueba } from "GENERAL/JUEGOS/Juego3Pizarra/JuegoPrueba";
import { ContenedorPrincipal, ContenedorHome,ContenedorSecciones } from "STYLED-COMPONENTS/Estructura";

export const Juego3 = () => {
  return (
    <ContenedorPrincipal>
      <Sidebar />
      <ContenedorHome>
        <Header />
        <ContenedorSecciones>
          <JuegoPrueba/>
          
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};

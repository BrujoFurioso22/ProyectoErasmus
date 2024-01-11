import React from "react";
import styled from "styled-components";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
import { JuegoLienzo } from "GENERAL/JUEGOS/Juego4Lienzo/JuegoLienzo";
import { JuegoPrueba } from "GENERAL/JUEGOS/Juego4Lienzo/JuegoPrueba";
import { ContenedorPrincipal, ContenedorHome,ContenedorSecciones } from "STYLED-COMPONENTS/Estructura";

export const Juego4 = () => {
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
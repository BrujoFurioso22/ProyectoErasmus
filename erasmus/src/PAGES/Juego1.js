import React from "react";
import styled from "styled-components";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
import { Game1 } from "GENERAL/JUEGOS/JUEGO1/Game1";
import { ContenedorPrincipal, ContenedorHome,ContenedorSecciones } from "STYLED-COMPONENTS/Estructura";

export const Juego1 = () => {
  return (
    <ContenedorPrincipal>
      <Sidebar />
      <ContenedorHome>
        <Header />
        <ContenedorSecciones>
          <Game1/>
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};

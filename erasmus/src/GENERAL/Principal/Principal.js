import React from "react";
import { Header } from "GENERAL/ComponentesGenerales/Header/header";
import styled from "styled-components";
import { SeccionesJuegos } from "GENERAL/Principal/SeccionesJuegos";
import { ROUTES } from "CONFIG/ROUTES/paths";
import { Sidebar } from "GENERAL/ComponentesGenerales/Sidebar/Sidebar";
const ContenedorPrincipal = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  
`;

const ContenedorHome = styled.div`
  display: inline-block;
  width: 100%;
  position: relative;
`;

const ContenedorJuegos = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`;

const ContenedorSecciones = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 10%;
  height: calc(100vh - 50px);
  background: linear-gradient(
      to bottom,
      rgba(59, 111, 208, 0.23),
      rgba(0, 0, 0, 0.23)
    ),
    url("https://img.freepik.com/vector-gratis/fondo-nube-vector-estilo-corte-papel-pastel_53876-135914.jpg?w=900&t=st=1705361240~exp=1705361840~hmac=ce42ca9d96033bed4a2b11c7fbef937fa895bd643b1b601356018e4da09ee03f");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: background 0.8s ease;
  @keyframes background {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
    
  }
`;

const juegos = [
  {
    nombre: "Direcciones",
    path: ROUTES.JUEGOS.J1,
  },
  {
    nombre: "Memoria",
    path: ROUTES.JUEGOS.J2,
  },
  {
    nombre: "Pizarrón",
    path: ROUTES.JUEGOS.J3,
  },
  {
    nombre: "Globos Colores",
    path: ROUTES.JUEGOS.J4,
  },
];
export const Principal = () => {
  return (
    <ContenedorPrincipal>
      <Sidebar />
      <ContenedorHome>
        <Header />
        <ContenedorSecciones>
          <h1>Bienvenido, Listo para jugar?</h1>

          <ContenedorJuegos>
            {juegos.map((item, index) => (
              <SeccionesJuegos key={index} juego={item} conteo={index} />
            ))}
          </ContenedorJuegos>
        </ContenedorSecciones>
      </ContenedorHome>
    </ContenedorPrincipal>
  );
};

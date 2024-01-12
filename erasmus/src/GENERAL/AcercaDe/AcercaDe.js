import React from "react";
import styled from "styled-components";
import logo1 from "SOURCES/diego.svg";
import logo2 from "SOURCES/pedro.svg";
import logo3 from "SOURCES/tef.svg";

// Estilos para el componente
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: whitesmoke;
  margin-top: 15px;
  border-radius: 20px;

`;

const Title = styled.h1`
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

const TeamList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const TeamMember = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  background-color: rgba(0, 0, 0, 0.14);
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  p{
    font-weight: 600;
  }
`;

const Image = styled.img`
  width: 80px;
  border-radius: 50%;
`;

// Componente principal
export const AcercaDe = () => {
  return (
    <AboutContainer>
      <Title>Acerca De Nosotros</Title>
      <Description>
        Bienvenido a nuestra página de "Acerca De". Aquí encontrarás información
        sobre nuestro equipo de trabajo.
      </Description>
      <Description>
        Proyecto Erasmus
      </Description>

      <TeamList>
        <TeamMember>
          <Image src={logo1} alt="Miembro 1" />
          <p>Diego Barbecho</p>
        </TeamMember>
        <TeamMember>
          <Image src={logo2} alt="Miembro 2" />
          <p>Pedro Figueroa</p>
        </TeamMember>
        <TeamMember>
          <Image src={logo3} alt="Miembro 3" />
          <p>Sthefany Peñafiel</p>
        </TeamMember>
      </TeamList>

      
    </AboutContainer>
  );
};

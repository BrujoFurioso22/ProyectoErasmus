import React from "react";
import styled from "styled-components";

// Estilos para el componente
const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
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
`;

const TeamMember = styled.li`
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: 50%;
`;

// Componente principal
export const AcercaDe = () => {
  return (
    <AboutContainer>
      <Title>Acerca De Nosotros</Title>
      <Description>
        Bienvenido a nuestra página de "Acerca De". Aquí encontrarás información
        sobre nuestro equipo y nuestra misión.
      </Description>
      <Description>
        Proyecto Erasmus
      </Description>

      <TeamList>
        <TeamMember>
          <Image src="url_del_miembro_1.jpg" alt="Miembro 1" />
          <p>Diego Barbecho</p>
        </TeamMember>
        <TeamMember>
          <Image src="url_del_miembro_2.jpg" alt="Miembro 2" />
          <p>Pedro Figueroa</p>
        </TeamMember>
        <TeamMember>
          <Image src="url_del_miembro_3.jpg" alt="Miembro 3" />
          <p>Stephany Peñafiel</p>
        </TeamMember>
      </TeamList>

      
    </AboutContainer>
  );
};

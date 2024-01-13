import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  background: linear-gradient(to bottom, rgba(59, 111, 208, 0.23),rgba(0, 0, 0, 0.23)) ,  url("https://cdn.pixabay.com/photo/2020/10/14/16/14/space-5654794_1280.png");

`;

export const ContenedorHome = styled.div`
  display: inline-block;
  width: 100%;
  height: calc(100vh);
`;

export const ContenedorSecciones = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 50px;
`;

export const ContendorPadre = styled.div`
  display: flex;
  width: 100%;
`
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TablaJson } from "./TablaJson";
import { ContendorPadre } from "STYLED-COMPONENTS/Estructura";
import {
  ConsultaEstudiantes,
  ConsultaIDP,
} from "CONFIG/BACKEND/Consultas/Profesor";

const ContenedorTabs = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  height: 100%;
  padding: 40px;

  .contenedorTablas {
    display: flex;
    box-shadow: 0 10px 20px -2px rgba(0, 0, 0, 0.32);
    position: relative;
    row-gap: 40px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    left: 0;
    padding: 40px;
    border-radius: 15px;
  }
`;

const nombresPersonalizados = {
  nombre: "Nombre Estudiante",
  correo: "Correo",
  institucion: "Institucion",
  sexo: "Sexo",
};

const InputStyled = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  color: black;
  outline: none;
`;

const ButtonStyled = styled.button`
  border-radius: 8px;
  border: none;
  padding: 5px 10px;
  background-color: rgba(21, 78, 210, 0.82);
  color: white;
`;

export const ConfigEstudiantes = () => {
  const [correoEst, setCorreoEst] = useState("");
  const [data, setData] = useState([]);
  const ConsultaEstudiantesTabla = async () => {
    const idPR = await ConsultaIDP(localStorage.getItem("id"));
    if (idPR.length > 0) {
      const datos = await ConsultaEstudiantes(idPR[0].idprofesores);
      setData(datos);
    }
  };

  const ConsultarExistenciaEstudiante = (correo) => {

    
  };
  useEffect(() => {
    ConsultarExistenciaEstudiante(correoEst);
  }, [correoEst]);

  useEffect(() => {
    ConsultaEstudiantesTabla();
  }, []);
  return (
    <ContendorPadre>
      <ContenedorTabs>
        <h2>Configuración Estudiantes</h2>
        <ContendorPadre
          style={{
            justifyContent: "center",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <InputStyled
            type="text"
            placeholder="Correo estudiante"
            onChange={(e) => setCorreoEst(e.target.value)}
          />
          <label>{correoEst}</label>
          <ButtonStyled>Agregar</ButtonStyled>
        </ContendorPadre>
        <div className="contenedorTablas">
          <TablaJson
            jsonData={data}
            columnasOcultas={["idestudiantes"]}
            nombresPersonalizados={nombresPersonalizados}
          />
        </div>
      </ContenedorTabs>
    </ContendorPadre>
  );
};

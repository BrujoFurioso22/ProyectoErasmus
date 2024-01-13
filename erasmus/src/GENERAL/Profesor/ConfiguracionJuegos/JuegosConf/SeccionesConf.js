import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  ConsultaConfiguracionJuego1,
  ConsultaImagenesJuego1,
} from "CONFIG/BACKEND/Consultas/Juegos";

const datos1 = [
  {
    value: 1,
    texto: "1",
  },
  {
    value: 2,
    texto: "2",
  },
  {
    value: 3,
    texto: "3",
  },
  {
    value: 4,
    texto: "4",
  },
];
const datos2 = [
  {
    value: 1,
    texto: "1",
  },
  {
    value: 2,
    texto: "2",
  },
  {
    value: 3,
    texto: "3",
  },
  {
    value: 4,
    texto: "4",
  },
  {
    value: 5,
    texto: "6",
  },
  {
    value: 6,
    texto: "6",
  },
  {
    value: 7,
    texto: "7",
  },
  {
    value: 8,
    texto: "8",
  },
  {
    value: 9,
    texto: "9",
  },
];
const datos3 = [
  {
    value: 1,
    texto: "1",
  },
  {
    value: 2,
    texto: "3",
  },
  {
    value: 4,
    texto: "4",
  },
  {
    value: 5,
    texto: "6",
  },
];
const datos4 = [
  {
    value: 1,
    texto: "Globo verde",
  },
  {
    value: 2,
    texto: "Globo amarillo",
  },
  {
    value: 3,
    texto: "Globo rojo",
  },
  {
    value: 4,
    texto: "Globo azul",
  },
  {
    value: 5,
    texto: "Globo naranja",
  },
];

const puntajejuego1 = [
  {
    value: 5,
    texto: "5 rondas / 1 estrella",
  },
  {
    value: 10,
    texto: "10 rondas / 2 estrellas",
  },
  {
    value: 15,
    texto: "15 rondas / 3 estrellas",
  },
];
const puntajejuego2 = [
  {
    value: 3,
    texto: "3 imagenes / 1 estrella",
  },
  {
    value: 4,
    texto: "4 imagenes / 2 estrellas",
  },
  {
    value: 5,
    texto: "5 imagenes / 3 estrellas",
  },
];

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
`;
const SelectStyled = styled.select`
  border-radius: 8px;
  padding: 5px 8px;
`;
const BotonStyled = styled.button`
  padding: 8px 15px;
  color: white;
  background-color: rgba(0, 88, 210, 0.87);
  border: none;
  border-radius: 15px;
`;

const SelectOptions = (data, label) => {
  return (
    <Contenedor style={{ gap: "5px", alignItems: "center" }}>
      <label>{label}</label>
      <SelectStyled id="">
        <option value="0">Seleccionar</option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.texto}
          </option>
        ))}
      </SelectStyled>
    </Contenedor>
  );
};
export const SeccionesConf1 = () => {
  const [valorPuntaje, setValorPuntaje] = useState(0);
  const [imagenes, setImagenes] = useState([]);
  const [valorImagenes, setValorImagenes] = useState([
    { id: 1, imgid: 0 },
    { id: 2, imgid: 0 },
    { id: 3, imgid: 0 },
    { id: 4, imgid: 0 },
  ]);

  const actualizarValorImgId = (id, nuevoValor) => {
    const nuevoEstado = [...valorImagenes];

    const objetoActualizado = nuevoEstado.find((item) => item.id === id);
    if (objetoActualizado) {
      objetoActualizado.imgid = nuevoValor;
    }
    setValorImagenes(nuevoEstado);
  };

  const valueImgs = (id) => {
    const res = valorImagenes.find((item) => item.id === id);
    const re = res.imgid;
    return re;
  };

  const ConsultarImagenesyConfiguraciones = async () => {
    const resp = await ConsultaImagenesJuego1();
    const resp1 = await ConsultaConfiguracionJuego1(localStorage.getItem("id"));
    if (resp.length > 0) {
      setImagenes(resp);
      if (resp1.length > 0) {
        setValorPuntaje(resp1[0].numRondas);
        actualizarValorImgId(1, resp1[0].img1);
        actualizarValorImgId(2, resp1[0].img2);
        actualizarValorImgId(3, resp1[0].img3);
        actualizarValorImgId(4, resp1[0].img4);
      }
    }
  };
  useEffect(() => {
    ConsultarImagenesyConfiguraciones()
  }, []);

  const SelectOptions1Juego1 = (data, label, queimg) => {
    return (
      <Contenedor style={{ gap: "5px", alignItems: "center" }}>
        <label>{label}</label>
        <SelectStyled
          id=""
          value={valueImgs(queimg)}
          onChange={(e) =>
            actualizarValorImgId(queimg, parseInt(e.target.value))
          }
        >
          <option value="0">Seleccionar</option>
          {data.map((item, index) => (
            <option key={index} value={item.idimagenes}>
              {item.nombreimagen}
            </option>
          ))}
        </SelectStyled>
      </Contenedor>
    );
  };

  const SelectOptions2Juego1 = (data, label) => {
    return (
      <Contenedor style={{ gap: "5px", alignItems: "center" }}>
        <label>{label}</label>
        <SelectStyled
          id=""
          value={valorPuntaje}
          onChange={(e) => setValorPuntaje(e.target.value)}
        >
          <option value="0">Seleccionar</option>
          {data.map((item, index) => (
            <option key={index} value={item.value}>
              {item.texto}
            </option>
          ))}
        </SelectStyled>
      </Contenedor>
    );
  };

  const GuardarConfiguracionJuego1 = async(valorP,valorI,fetch) => {
    
  };

  return (
    <Contenedor style={{ flexDirection: "column", rowGap: "15px" }}>
      <h5>Configuración juego 1</h5>
      <h6>Selecciona que imagenes desea mostrar</h6>
      <Contenedor
        style={{ flexDirection: "row", gap: "10px", flexWrap: "wrap" }}
      >
        {SelectOptions1Juego1(imagenes, "Arriba", 1)}
        {SelectOptions1Juego1(imagenes, "Derecha", 2)}
        {SelectOptions1Juego1(imagenes, "Abajo", 3)}
        {SelectOptions1Juego1(imagenes, "Izquierda", 4)}
      </Contenedor>
      <h6>Selecciona las rondas</h6>
      <Contenedor
        style={{ flexDirection: "row", gap: "10px", justifyContent: "start" }}
      >
        {SelectOptions2Juego1(puntajejuego1, "Puntaje/Estrellas")}
      </Contenedor>
      <Contenedor style={{ paddingTop: "15px" }}>
        <BotonStyled onClick={() => GuardarConfiguracionJuego1(valorPuntaje,valorImagenes,ConsultarImagenesyConfiguraciones)}>
          Guardar Configuración
        </BotonStyled>
      </Contenedor>
    </Contenedor>
  );
};
export const SeccionesConf2 = () => {
  const GuardarConfiguracionJuego2 = () => {};

  return (
    <Contenedor style={{ flexDirection: "column", rowGap: "15px" }}>
      <h5>Configuración juego 2</h5>
      <h6>Selecciona que imagenes desea mostrar</h6>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos2, "1")}
        {SelectOptions(datos2, "2")}
        {SelectOptions(datos2, "3")}
      </Contenedor>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos2, "4")}
        {SelectOptions(datos2, "5")}
        {SelectOptions(datos2, "6")}
      </Contenedor>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos2, "7")}
        {SelectOptions(datos2, "8")}
        {SelectOptions(datos2, "9")}
      </Contenedor>
      <h6>Selecciona número de imagenes a memorizar</h6>
      <Contenedor
        style={{ flexDirection: "row", gap: "10px", justifyContent: "start" }}
      >
        {SelectOptions(puntajejuego2, "Puntaje/Estrellas")}
      </Contenedor>
      <Contenedor style={{ paddingTop: "15px" }}>
        <BotonStyled onClick={() => GuardarConfiguracionJuego2()}>
          Guardar Configuración
        </BotonStyled>
      </Contenedor>
    </Contenedor>
  );
};
export const SeccionesConf3 = () => {
  const GuardarConfiguracionJuego3 = () => {};

  return (
    <Contenedor style={{ flexDirection: "column", rowGap: "15px" }}>
      <h5>Configuración juego 3</h5>
      <h6>Selecciona la imagen a mostrar</h6>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos3, "Imagen a dibujar")}
      </Contenedor>
      <h6>En este juego no se lleva puntaje, es para entretenimiento</h6>
      <Contenedor style={{ paddingTop: "15px" }}>
        <BotonStyled onClick={() => GuardarConfiguracionJuego3()}>
          Guardar Configuración
        </BotonStyled>
      </Contenedor>
    </Contenedor>
  );
};
export const SeccionesConf4 = () => {
  const [velocidad, setVelocidad] = useState(1);
  const GuardarConfiguracionJuego4 = () => {};

  return (
    <Contenedor style={{ flexDirection: "column", rowGap: "15px" }}>
      <h5>Configuración juego 4</h5>
      <h6>Selecciona que imagenes desea mostrar</h6>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos4, "Imagen 1")}
        {SelectOptions(datos4, "Imagen 2")}
        {SelectOptions(datos4, "Imagen 3")}
      </Contenedor>
      <h6>Nivel de velocidad</h6>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        <input
          type="range"
          min={1}
          max={3}
          value={velocidad}
          onChange={(e) => setVelocidad(e.target.value)}
        />{" "}
        <label>{velocidad}</label>
      </Contenedor>
      <h6>Selecciona que color de globo va a tener que acertar</h6>
      <Contenedor style={{ flexDirection: "row", gap: "10px" }}>
        {SelectOptions(datos4, "Color a acertar")}
      </Contenedor>
      <h6>
        Aquí si termina con las 3/3 vidas tendrá 2 estrellas y 2/3 vidas tendrá
        1 estrella
      </h6>
      <Contenedor style={{ paddingTop: "15px" }}>
        <BotonStyled onClick={() => GuardarConfiguracionJuego4()}>
          Guardar Configuración
        </BotonStyled>
      </Contenedor>
    </Contenedor>
  );
};

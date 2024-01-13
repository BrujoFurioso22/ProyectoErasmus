import React, { useState, useEffect } from "react";
import { Botones } from "./Componentes/Botones";
import { Puntaje } from "./Componentes/Puntaje";
import { ConsultaRondasJuego1 } from "CONFIG/BACKEND/Consultas/Juegos";

import styled from "styled-components";

import "./assets/styles/boton_iniciar.css";

const direcciones = {
  arriba: "ARRIBA",
  abajo: "ABAJO",
  izquierda: "IZQUIERDA",
  derecha: "DERECHA",
};

const ContenedorGlobal = styled.div`
  width: 100%;
  height: calc(100%);
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContenedorBotones = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  width: 100%;
  height: 85vh;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mensaje-central {
    grid-column: 2;
    grid-row: 2;
  }
  .boton-arriba {
    grid-column: 2;
    grid-row: 1;
  }
  .boton-izquierda {
    grid-column: 1;
    grid-row: 2;
  }
  .boton-derecha {
    grid-column: 3;
    grid-row: 2;
  }
  .boton-abajo {
    grid-column: 2;
    grid-row: 3;
  }
`;
const PuntajeStyled = styled.div`
  grid-column: 1;
  grid-row: 1;
  span:first-child {
    font-weight: 800;
    padding-right: 10px;
  }
`;

const ContenedorCentral = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  .iniciado {
    gap: 10px;
  }
`;

export function Game1() {
  const [numRondas, setNumRondas] = useState(5);
  const [accion, setaccion] = useState(""); //Es el estado que se mostrara en el medio del juego para que el jugador sepa que tiene que tocar
  const [contador, setcontador] = useState(0); //Contador para mostrar al jugador al iniciar el juego, 3->2->1
  const [iniciarJuego, setIniciarJuego] = useState(false); //Estado para decir que el juego se empezo
  const [AccionInicioJuego, setAccionInicioJuego] = useState(false); //Estado para hacer que la logica del juego inicie
  const [hajugado, setHaJugado] = useState(false); //Estado para indicar si el jugador ya jugo una vez, true es que ya jugo, false es que es la primera vez
  const [puntaje, setPuntaje] = useState(0); // Estado para el puntaje
  const [puntajeAnterior, setPuntajeAnterior] = useState(puntaje); // Estado para mostrar el puntaje del juego anterior
  const [arregloAleatorio, setArregloAleatorio] = useState([]); //Arreglo el cual se generara aleatoriamente
  const [indiceActual, setIndiceActual] = useState(0); //Estado para indicar en que ronda va el juego
  const [habilitar, sethabilitar] = useState(true); // Estado para activar o desactivar los botones
  const [finJuego, setFinJuego] = useState(false); //Estado para decir que el juego se acabo y poder guardar algunos datos
  const opciones = [
    direcciones.arriba,
    direcciones.abajo,
    direcciones.izquierda,
    direcciones.derecha,
  ];

  function generarArregloAleatorio() {
    const nuevoArreglo = [];
    for (let i = 0; i < numRondas; i++) {
      const indiceAleatorio = Math.floor(Math.random() * opciones.length);
      nuevoArreglo.push(opciones[indiceAleatorio]);
    }
    return nuevoArreglo;
  }

  const ConsultarRondas = async () => {
    const res = await ConsultaRondasJuego1(localStorage.getItem("id"));
    console.log(res);
    if (res.length > 0) {
      setNumRondas(res[0].numRondas);
    }
  };

  //Funcion para poder mostrar la siguiente opcion despues de que haya seleccionado un boton el jugador
  const mostrarSiguienteAccion = () => {
    if (indiceActual < arregloAleatorio.length) {
      setaccion(arregloAleatorio[indiceActual]);
      setIndiceActual(indiceActual + 1);
    } else {
      setaccion("Fin del Juego");
      sethabilitar(true);
      setTimeout(() => {
        finalizarJuego();
      }, 2000);
    }
  };

  //Funcion a llamar para poder finalize el juego, aqui se colocan las variables para que el juego se ponga en 0 de nuevo
  const finalizarJuego = () => {
    setaccion("");
    if (!hajugado) {
      setHaJugado(true);
    }
    setIniciarJuego(false);
    setIndiceActual(0);
    setArregloAleatorio([]);
    setAccionInicioJuego(false);
    sethabilitar(true);
    setFinJuego(true);
  };

  //Funcion a llamar para poder iniciar el juego, se establece en 0 algunas variables para poder empezar
  const IniJuego = () => {
    if (iniciarJuego) {
      setIndiceActual(0);
      setPuntaje(0);
      sethabilitar(false);
      mostrarSiguienteAccion();
    }
  };

  useEffect(() => {
    IniJuego();
  }, [AccionInicioJuego]);

  useEffect(() => {
    const Finalizar = () => {
      setPuntajeAnterior(puntaje);
      setTimeout(() => {
        setPuntaje(0);
      }, 800);
    };
    Finalizar();
  }, [finJuego]);

  useEffect(() => {
    ConsultarRondas();
  }, []);

  const verificarAccion = (botonPresionado) => {
    if (!habilitar) {
      if (botonPresionado === arregloAleatorio[indiceActual - 1]) {
        setPuntaje(puntaje + 1);
        mostrarSiguienteAccion();
      } else {
        mostrarSiguienteAccion();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (contador >= 1) {
        console.log(contador);
        setcontador(contador - 1);
        if (contador === 1) {
          setaccion("");
        } else {
          setaccion(contador - 1);
        }
      } else {
        // Cuando el contador llega a 1, detiene el intervalo.
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      // Limpia el intervalo cuando el componente se desmonta.
      clearInterval(interval);
    };
  }, [contador]);

  //Funcion para iniciar el juego
  const handleIniciarJuego = (value) => {
    setIniciarJuego(value);
    setcontador(4);
    setTimeout(() => {
      setAccionInicioJuego(true);
    }, 5000);

    const nuevoArreglo = generarArregloAleatorio();
    setArregloAleatorio(nuevoArreglo);
  };

  return (
    <ContenedorGlobal>
      <ContenedorBotones>
        <PuntajeStyled>
          <Puntaje puntaje={puntaje} puntajetotal={numRondas} />
        </PuntajeStyled>
        <div className="boton-arriba">
          <Botones
            habilitar={habilitar}
            texto={!habilitar ? direcciones.arriba : "?"}
            indicacion={direcciones.arriba}
            setaccion={setaccion}
            verificarAccion={verificarAccion}
          />
        </div>
        <div className="boton-izquierda">
          <Botones
            habilitar={habilitar}
            texto={!habilitar ? direcciones.izquierda : "?"}
            indicacion={direcciones.izquierda}
            setaccion={setaccion}
            verificarAccion={verificarAccion}
          />
        </div>
        <div className="mensaje-central">
          {iniciarJuego === true ? (
            <div className="contenedor-centro iniciado">
              {AccionInicioJuego ? (
                <span>Ronda: {indiceActual}</span>
              ) : (
                <React.Fragment></React.Fragment>
              )}
              <span>{accion}</span>
            </div>
          ) : iniciarJuego === false && hajugado === true ? (
            <ContenedorCentral>
              <span>
                Puntaje juego anterior: {puntajeAnterior}/{numRondas}
              </span>
              <button
                className="iniciar-juego"
                onClick={() => handleIniciarJuego(true)}
              >
                JUGAR DE NUEVO
              </button>
            </ContenedorCentral>
          ) : (
            <button
              className="iniciar-juego"
              onClick={() => handleIniciarJuego(true)}
            >
              JUGAR
            </button>
          )}
        </div>
        <div className="boton-derecha">
          <Botones
            habilitar={habilitar}
            texto={!habilitar ? direcciones.derecha : "?"}
            indicacion={direcciones.derecha}
            setaccion={setaccion}
            verificarAccion={verificarAccion}
          />
        </div>
        <div className="boton-abajo">
          <Botones
            habilitar={habilitar}
            texto={!habilitar ? direcciones.abajo : "?"}
            indicacion={direcciones.abajo}
            setaccion={setaccion}
            verificarAccion={verificarAccion}
          />
        </div>
      </ContenedorBotones>
    </ContenedorGlobal>
  );
}

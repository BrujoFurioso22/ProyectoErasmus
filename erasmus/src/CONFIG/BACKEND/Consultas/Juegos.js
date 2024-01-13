import axios from "axios";
import url from "CONFIG/url";

export async function ConsultaRondasJuego1(idestudiante) {
  try {
    const res = await axios.get(`${url}/juegos/juego1/rondas/${idestudiante}`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function ConsultaSiTieneProfesor(idestudiante) {
  try {
    const res = await axios.get(`${url}/juegos/profesorAsignado/${idestudiante}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaConfiguracionJuego1(idprofesor) {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/juego1/${idprofesor}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaImagenesJuego1() {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/imagenes/juego1`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaConfiguracionJuego2(idprofesor) {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/juego2/${idprofesor}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaImagenesJuego2() {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/imagenes/juego2`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaConfiguracionJuego3(idprofesor) {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/juego3/${idprofesor}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaImagenesJuego3() {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/imagenes/juego3`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaConfiguracionJuego4(idprofesor) {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/juego4/${idprofesor}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function ConsultaImagenesJuego4() {
  try {
    const res = await axios.get(`${url}/juegos/configuracion/imagenes/juego4`);
    return res.data;
  } catch (err) {
    return err;
  }
}

export async function ActualizarConfiguracion1(
  idimg1,
  idimg2,
  idimg3,
  idimg4,
  numRondas,
  idprofesor,
  fetch
) {
  try {
    const res = await axios.post(`${url}/juegos/actualizarConfig1`, {
      idimg1: idimg1,
      idimg2: idimg2,
      idimg3: idimg3,
      idimg4: idimg4,
      numRondas: numRondas,
      idprofesor: idprofesor,
    });
    fetch();
    return res.data;
  } catch (err) {
    return [];
  }
}
export async function ActualizarConfiguracion2(
  idimg1,
  idimg2,
  idimg3,
  idimg4,
  idimg5,
  idimg6,
  idimg7,
  idimg8,
  idimg9,
  numCartas,
  idprofesor,
  fetch
) {
  try {
    const res = await axios.post(`${url}/juegos/actualizarConfig2`, {
      idimg1: idimg1,
      idimg2: idimg2,
      idimg3: idimg3,
      idimg4: idimg4,
      idimg5: idimg5,
      idimg6: idimg6,
      idimg7: idimg7,
      idimg8: idimg8,
      idimg9: idimg9,
      numCartas: numCartas,
      idprofesor: idprofesor,
    });
    fetch();
    return res.data;
  } catch (err) {
    return [];
  }
}
export async function ActualizarConfiguracion3(
  idimg1,
  idprofesor,
  fetch
) {
  try {
    const res = await axios.post(`${url}/juegos/actualizarConfig3`, {
      idimg1: idimg1,
      idprofesor: idprofesor,
    });
    fetch();
    return res.data;
  } catch (err) {
    return [];
  }
}
export async function ActualizarConfiguracion4(
  idimg1,
  idimg2,
  idimg3,
  velocidad,
  idcorrecto,
  idprofesor,
  fetch
) {
  try {
    const res = await axios.post(`${url}/juegos/actualizarConfig4`, {
      idimg1: idimg1,
      idimg2: idimg2,
      idimg3: idimg3,
      velocidad: velocidad,
      idcorrecto: idcorrecto,
      idprofesor: idprofesor,
    });
    fetch();
    return res.data;
  } catch (err) {
    return [];
  }
}

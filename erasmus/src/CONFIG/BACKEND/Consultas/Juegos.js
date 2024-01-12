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

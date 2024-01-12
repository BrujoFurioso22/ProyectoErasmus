import axios from "axios";
import url from "CONFIG/url";

export async function ConsultaEstudiantes(idprofesor) {
  // console.log(`${url}`);
  const res = await axios.get(`${url}/profesor/${idprofesor}`);
  // console.log(res.data);
  return res.data;
}

export async function ConsultaIDEstudiante(correoEstudiante) {
  // console.log(`${url}`);
  try {
    const res = await axios.get(
      `${url}/profesor/idEstudiante/${correoEstudiante}`
    );
    return res.data;
  } catch (err) {
    return []
  }
  // console.log(res.data);
}
export async function CrearAsignacion(idestudiante, idprofesor, fetch) {
  const res = await axios.post(`${url}/profesor/crearAsignacion`, {
    idestudiante: idestudiante,
    idprofesor: idprofesor,
  });
  fetch();
  return res;
}
export async function EliminarAsignacion(idestudiante, idprofesor, fetch) {
  const res = await axios.delete(`${url}/profesor/eliminarAsignacion`, {
    params: {
      idestudiante: idestudiante,
      idprofesor: idprofesor,
    },
  });
  fetch();
  return res;
}

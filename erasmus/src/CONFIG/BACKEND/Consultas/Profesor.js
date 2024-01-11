import axios from "axios";
import url from "CONFIG/url";

export async function ConsultaEstudiantes(idprofesor) {
  // console.log(`${url}`);
  const res = await axios.get(`${url}/profesor/${idprofesor}`);
  // console.log(res.data);
  return res.data;
}
// export async function ConsultaIDP(idusuario) {
//   // console.log(`${url}`);
//   const res = await axios.get(
//     `${url}/profesor/consultaridprofesor/${idusuario}`
//   );
//   // console.log(res.data);
//   return res.data;
// }

export async function ConsultaIDEstudiante(correoEstudiante) {
  // console.log(`${url}`);
  const res = await axios.get(
    `${url}/profesor/idEstudiante/${correoEstudiante}`
  );
  // console.log(res.data);
  return res.data;
}
export async function CrearAsignacion(idestudiante, idprofesor, fetch) {
  const res = await axios.post(`${url}/profesor/crearAsignacion`, {
    idestudiante: idestudiante,
    idprofesor: idprofesor
  });
  console.log(res)
  fetch();
}

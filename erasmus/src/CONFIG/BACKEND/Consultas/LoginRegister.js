import axios from "axios";
import url from "CONFIG/url";

export async function LoginUsers(usu, contra) {
  // console.log(`${url}`);
  const res = await axios.get(`${url}/usuarios/${usu}/${contra}`);
  // console.log(res.data);
  return res.data;
}

// export async function ListarMarcas(empresa) {
//   const res = await axios.get(`${url}/marca/${empresa}`);
//   // console.table(res.data)
//   return res.data;
// }
// export async function ListarProductos(empresa, marca) {
//   const res = await axios.get(`${url}/producto/${empresa}/${marca}`);
//   // console.log(res.data)
//   return res.data;
// }
// export async function ListarProductosAsignaciones(iempresa, imarca) {
//   const res = await axios.get(
//     `${url}/producto/asignados/${iempresa}/${imarca}`
//   );
//   // console.log(res.data)
//   return res.data;
// }
// export async function ListaParametrizacion() {
//   const res = await axios.get(`${url}/mrp`);
//   // console.log(res.data)
//   return res.data;
// }
// export async function Simular(iempresa, imarca) {
//   const res = await axios.get(`${url}/mrp/pedidos/${iempresa}/${imarca}`);
//   // console.log(res.data)
//   return res.data;
// }
// export async function ActualizarParametrizaciones(
//   identificador,
//   fecha,
//   leadTime,
//   NServicio,
//   fetch
// ) {
//   const res = await axios.post(`${url}/mrp/${identificador}`, {
//     fechaMaxima: fecha,
//     leadTime: leadTime,
//     nivelServicio: NServicio,
//   });
//   fetch();
// }

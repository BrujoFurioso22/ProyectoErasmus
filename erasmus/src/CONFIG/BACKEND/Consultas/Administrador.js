import axios from "axios";
import url from "CONFIG/url";

export async function ConsultaImagenesAdmin(numJuego) {
  try {
    const res = await axios.get(`${url}/admin/consultarImagenes/${numJuego}`);
    return res.data;
  } catch (err) {
    return err;
  }
}
export async function CambiarEstadoImagen(idimagen, estado, fetch) {
  const res = await axios.post(`${url}/admin/cambiarEstadoImagenAdmin`, {
    idimagen: idimagen,
    estado: estado,
  });
  fetch();
  return res;
}
export async function CargarImagen(numJuego, formData) {
  try {
    const res = await axios.post(`${url}/admin/subirImagen/${numJuego}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res;
  } catch (error) {
    return error;
  }
}

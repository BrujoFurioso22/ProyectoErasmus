import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { ContendorPadre } from "STYLED-COMPONENTS/Estructura";
import { ConsultarUsuario } from "CONFIG/BACKEND/Consultas/LoginRegister";
import { Prev } from "react-bootstrap/esm/PageItem";
const ContenedorN1 = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 15px;
`;

const ContenedorN2 = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

// Estilos para el componente
const ImageContainer = styled.div`
  text-align: center;
  margin: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  row-gap: 20px;
`;

const ChangeImageButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const InputStyled = styled.input`
  min-width: 120px;
  padding: 8px 15px;
  border: 1px solid rgba(71, 71, 71, 0.15);
  background-color: white;
  border-radius: 12px;
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 35px 45px;
  background-color: rgba(227, 168, 226, 0.2);
  row-gap: 10px;
  border-radius: 20px;
  div {
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
    align-items: center;
  }
`;

export const AdministrarPerfil = () => {
  // Estado para la URL de la imagen
  const [imageURL, setImageURL] = useState("url_de_tu_imagen_inicial.jpg");
  const fileInputRef = useRef(null);
  const [datosUsuario, setDatosUsuario] = useState({
    nombre: "",
    institucion: "",
    correo: "",
    contrasena: "",
  });

  const ConsultarDatosUsuario = async () => {
    const datos = await ConsultarUsuario(
      localStorage.getItem("correo"),
      localStorage.getItem("contrasena")
    );

    datos.length > 0 && SetearDatos(datos[0]);
  };

  useEffect(() => {
    ConsultarDatosUsuario();
  }, []);

  const SetearDatos = (datos) => {
    console.log(datos);

    setDatosUsuario({
      nombre: datos.nombre,
      institucion: "UDA",
      correo: datos.correo,
      contrasena: datos.contrasena,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageURL(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    // Simula un clic en el input al hacer clic en el botón
    fileInputRef.current.click();
  };
  return (
    <ContendorPadre
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>AdministrarPerfil</h2>
      <ContenedorN1>
        <ContenedorN2>
          <ImageContainer>
            <img src={imageURL} alt="Imagen" style={{ maxWidth: "100%" }} />
            <HiddenInput
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              ref={fileInputRef}
            />
            <ChangeImageButton onClick={handleClick}>
              Cambiar Imagen
            </ChangeImageButton>
          </ImageContainer>
        </ContenedorN2>
        <ContenedorN2>
          <FormStyled>
            <div>
              <label>Nombre</label>
              <InputStyled type="text" value={datosUsuario.nombre} />
            </div>
            <div>
              <label>Institución</label>
              <InputStyled type="text" value={datosUsuario.institucion} />
            </div>
            <div>
              <label>Correo</label>
              <InputStyled type="text" value={datosUsuario.correo} />
            </div>
            <div>
              <label>Contraseña</label>
              <InputStyled type="password" value={datosUsuario.contrasena} />
            </div>
          </FormStyled>
        </ContenedorN2>
      </ContenedorN1>
    </ContendorPadre>
  );
};

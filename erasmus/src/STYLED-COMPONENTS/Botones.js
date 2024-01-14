import "./botonJuego.css";
export const BotonJugar = ({ handleClick, texto }) => {
  return (
    <button onClick={()=> handleClick()} class="botonJugar">
      {texto}
    </button>
  );
};

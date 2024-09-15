import { useState } from "react";
import "./banner.styles.scss";

const Banner: React.FC = () => {
  const [message, setMessage] = useState("¡Bienvenido a mi sitio web!");

  const changeMessage = () => {
    setMessage("¡Gracias por visitar!");
  };

  return (
    <div className="banner">
      <h1>{message}</h1>
      <button onClick={changeMessage}>Cambiar Mensaje</button>
    </div>
  );
};

export default Banner;

import { useState } from "react";
import Home from "./Home";

const HomeContainer = ({ nombre }) => {
  const [counter, setCounter] = useState(0);
  const [NombreUsuario, setNombre] = useState("Gonzalo")
  const sumar = () => {
    setCounter(counter + 1);
  };

  return <Home counter={counter} nombre={nombre} sumar={sumar} NombreUsuario={NombreUsuario} setNombre={setNombre}/>;
};

export default HomeContainer;

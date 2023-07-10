const Home = ({ nombre, counter, sumar, NombreUsuario, setNombre }) => {
  return (
    <div style={{ padding: "0 20px", textAlign: "center" }}>
      <h1>Hola {nombre}</h1>
      <h2>{NombreUsuario}</h2>
      <button onClick={()=>setNombre("Cañete")}>Cambiar nombre</button>
      <h2>Contador de clicks</h2>
      <h2>{counter}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};

export default Home
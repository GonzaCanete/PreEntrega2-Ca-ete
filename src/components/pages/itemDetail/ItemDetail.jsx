import CounterContainer from "../../common/Counter/CounterContainer"
import "./ItemDetail.css";

const ItemDetail = ( { product, agregarAlCarrito } ) => {
  return (
    <div className="itemDetailContainer">
      <h1>{product.title}</h1>
      <h3>U$S {product.price}</h3>

      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito } />
    </div>
  )
}

export default ItemDetail
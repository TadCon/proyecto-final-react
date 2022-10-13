
import { useCartContext } from '../../../context/cartContext'

/* 
Descripción:
Carrito de compras: muestra la lista de productos seleccionados.
*/

export default function CarritoPage(){

  const { cartlist, vaciarCarrito } = useCartContext()
  return (
    <div>

      <h1>Carrito</h1>
      <ul>
        {cartlist.map(producto => <li> nombre: {producto.name} categoría:{producto.categoria} precio: {producto.price} Cant: {producto.cantidad} </li> )}
      </ul>
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}


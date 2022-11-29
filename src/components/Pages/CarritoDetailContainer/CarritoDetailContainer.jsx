import { useCartContext } from "../../../context/cartContext";
import Table from "react-bootstrap/Table";
import "./CarritoDetailContainer.css";

/* 
Descripción:
Detalle de elementos en el carrito.
*/

function CarritoDetailContainer() {
  const { cartlist, totalPrice, removeItem } = useCartContext();
  return (
    <>
      <Table className="shadow" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Item</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {cartlist.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.name}</td>
              <td>{producto.categoria}</td>
              <td>{producto.price}</td>
              <td>{producto.cantidad}</td>
              <td>
                <button
                  onClick={() => removeItem(producto.id)}
                  className="btn btn-danger px-3 shadow"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h2 className="my-3">Total: {totalPrice()}</h2>
    </>
  );
}

export default CarritoDetailContainer;

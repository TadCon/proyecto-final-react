import {
  getDocs,
  query,
  limit,
  orderBy,
  addDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/cartContext";
import "./CarritoPage.css";
import CarritoDetailContainer from "../CarritoDetailContainer/CarritoDetailContainer";

export default function CarritoPage() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { cartlist, emptyCart, totalPrice, totalAmount, orderOk } =
    useCartContext();
  const [carritoOk, setearCarritoOk] = useState(totalAmount() > 0);
  const [orderId, setOrderId] = useState();

  const ocultarBotonesDelCarrito = () => {
    setearCarritoOk(!carritoOk);
  };

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};

    orden.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      email: dataForm.email,
    };

    orden.items = cartlist.map((prod) => {
      const { id, name: title, price } = prod;
      return { id, title, price };
    });

    orden.total = totalPrice();

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, orden).then(() => emptyCart());

    const q = query(collection(db, "orders"), limit(1));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setOrderId(doc.id);
    });

    orderOk();
  };

  const handleInputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  //console.log(dataForm)
  return (
    <div className="container my-5">
      <CarritoDetailContainer />

      {/* fomulario para la orden */}
      <form id="form-cart" onSubmit={generarOrden}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={dataForm.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={dataForm.phone}
          placeholder="Teléfono"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="email"
          value={dataForm.email}
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        {carritoOk && cartlist.length > 0 ? (
          <div>
            <button
              className="btn btn-primary my-3"
              type="submit"
              id="submitButton"
            >
              Generar orden
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                emptyCart();
                ocultarBotonesDelCarrito();
              }}
            >
              Vaciar carrito
            </button>
          </div>
        ) : (
          <>
            <h3>El carrito está vacío</h3>
            <Link to="/">
              <button className="btn btn-primary my-3">Seguir Comprando</button>
            </Link>
          </>
        )}
        <h4 className="m-3 text-center">ID de orden: {orderId}</h4>
      </form>
    </div>
  );
}

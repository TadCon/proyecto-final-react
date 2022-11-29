import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

/* 
Descripción:
Detalle del item.
*/

const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true);
  const { addItem } = useCartContext();

  const onAdd = (cantidad) => {
    //console.log("onAdd", cantidad);
    addItem({ ...product, cantidad });
    setIsCount(false);
  };

  return (
    <div className="row p-5">
      <h1>Detalle del producto</h1>
      <div className="col-6">
        <center>
          <img src={`${product.foto}`} alt="Imagen descriptiva del producto" />
          <p>{product.name}</p>
          <br />
          <p>{product.price}</p>
        </center>
      </div>

      <div className="col-6 mt-5">
        <center>
          {isCount ? (
            <ItemCount onAdd={onAdd} stock={10} init={1} />
          ) : (
            <div>
              <Link to="/cart">
                <button className="btn btn-primary">Terminar Compra</button>
              </Link>
              <Link to="/">
                <button className="btn btn-primary">Seguir Comprando</button>
              </Link>
            </div>
          )}
        </center>
      </div>
    </div>
  );
};

export default ItemDetail;

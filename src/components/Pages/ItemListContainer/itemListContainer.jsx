import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";
import Titulo from "../../Titulo/Titulo";
import "./itemListContainer.css"

/* 
Descripción:
Lista de todos los items
*/

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((resSgte) =>
          setProductos(
            resSgte.filter((producto) => producto.categoria === idCategoria)
          )
        )
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((resSgte) => setProductos(resSgte))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div>
      <Titulo titulo={"Lista de productos"} subtitulo={""} />

      {/* Si está cargando, así lo indica, sino, mapea el array de productos */}
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        productos.map((prod) => (
          <div key={prod.id} style={{ marginLeft: 100 }} className="col-md-6">
            <Link to={`/detalle/${prod.id}`}>
              <div className="card mt-5">
                <p className="card-header txt">
                  {`${prod.name} - ${prod.categoria}`}
                </p>

                <div className="card-body">
                  <img src={prod.foto} alt="imagen" className="w-25" />
                </div>
                 <p className="txt">{prod.price}</p> 

              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemListContainer;

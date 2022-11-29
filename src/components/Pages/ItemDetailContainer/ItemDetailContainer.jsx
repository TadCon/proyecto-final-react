import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  //traer un producto de firebase
  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", idProducto);
    getDoc(queryDoc)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
 // console.log(product);
  return loading ? <h1>Cargando...</h1> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;

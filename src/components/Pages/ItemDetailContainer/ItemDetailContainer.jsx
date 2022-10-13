import ItemDetail from "../../ItemDetail/ItemDetail";

/* 
Descripción:
Por el momento, este es un componente auxiliar que renderiza el detalle del item.
*/

const ItemDetailContainer = () => {
  return (
    <div className="row">
      <div className="col-6">
        <ItemDetail />
      </div>
    </div>
  );
};

export default ItemDetailContainer;

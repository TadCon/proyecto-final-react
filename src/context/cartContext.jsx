import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // Estados globales
  const [cartlist, setCartList] = useState([]);

  const addItem = (product) => {
    const inCart = cartlist.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart != null) {
      setCartList(
        cartlist.map(() => {
          return { ...inCart, cantidad: inCart.cantidad + 1 };
        })
      );
    } else {
      setCartList([...cartlist, product]);
    }
  };

  const totalPrice = () => {
    return cartlist.reduce(
      (acum, prod) => acum + prod.cantidad * prod.price,
      0
    );
  };
  const totalAmount = () => {
    return cartlist.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  const removeItem = (id) => {
    setCartList(cartlist.filter((item) => item.id !== id));
  };

  const emptyCart = () => {
    setCartList([]);
  };

  const orderOk = () => {
    Swal.fire({
      position: "bottom",
      icon: "success",
      title: "Orden creada con éxito",
      showConfirmButton: true,
      timer: 2000,
    });
  };

  const AddedOk = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartlist,
        addItem,
        totalPrice,
        totalAmount,
        removeItem,
        emptyCart,
        AddedOk,
        orderOk,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

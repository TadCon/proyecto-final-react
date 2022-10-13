import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // estados globales
  const [cartlist, setCartList] = useState([]);

  const addItem = (producto) => {
    setCartList([...cartlist, producto]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartlist,
        addItem,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;

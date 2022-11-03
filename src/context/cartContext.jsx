import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // estados globales
  const [cartlist, setCartList] = useState([]);

  const addItem = (producto) => {
    setCartList([...cartlist, producto]);
  };

  const precioTotal = () => {
      return cartlist.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
  }
  const cantidadTotal = () => {
      return cartlist.reduce((acum, prod) => acum += prod.cantidad , 0)// acum = acum + cantidad
  }

  const removeItem= (id) => {
      setCartList( cartlist.filter(item => item.id !== id) )
  }


  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{
        cartlist,
        addItem,
        precioTotal,
        cantidadTotal,
        removeItem,
        vaciarCarrito
    }}>
        {children}
    </CartContext.Provider>

)}
export default CartContextProvider


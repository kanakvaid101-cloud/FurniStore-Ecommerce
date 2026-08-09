import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export default function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add Product To Cart
  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  }

  // Increase Quantity
  function increaseQty(id) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: item.qty + 1,
            }
          : item
      )
    );
  }

  // Decrease Quantity
  function decreaseQty(id) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                qty: item.qty - 1,
              }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  // Remove Product
  function removeFromCart(id) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  }

  // Subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * Number(item.qty),
    0
  );

  // Shipping
  const shipping = cart.length > 0 ? 20 : 0;

  // Total
  const total = subtotal + shipping;

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export { StoreContext };

export function useStore() {
  return useContext(StoreContext);
}
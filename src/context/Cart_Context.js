import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/Cart_reducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    totalItem: "",
    totalAmount: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, image, brand, title, oneProduct) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, image, brand, title, oneProduct },
    });
  };
  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };

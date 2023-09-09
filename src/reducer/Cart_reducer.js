import React from "react";

const Cart_reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, image, brand, title, oneProduct } = action.payload;
    console.log("my product into reducer", oneProduct);

    let cartProduct;

    cartProduct = {
      id,
      title,
      image,
      brand,
      price: oneProduct.price,
      stock: oneProduct.stock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  return state;
};

export default Cart_reducer;

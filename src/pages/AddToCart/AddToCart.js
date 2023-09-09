import { Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../context/Cart_Context";

const AddToCart = ({ oneProduct }) => {
  const { addToCart } = useCartContext();
  const { id, image, brand, title } = oneProduct;
  console.log("onlyone product", oneProduct);

  return (
    <div>
      <NavLink
        to="/cart"
        onClick={() => addToCart(id, image, brand, title, oneProduct)}
      >
        <Button variant="contained">Add To Cart</Button>
      </NavLink>
    </div>
  );
};

export default AddToCart;

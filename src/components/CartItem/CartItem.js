import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
// import { products } from "../../productSource";
import { useCartContext } from "../../context/Cart_Context";

const CartItem = ({ id, title, price, stock, brand, image }) => {
  const { cart, curElem } = useCartContext();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [deleteCart, setDeleteCart] = useState(cart);
  console.log("cart Item", cart);

  const removeProduct = (id) => {
    const deletedProduct = cart.filter((item, index) => {
      console.log("hello", item.id);
      if (item.id !== id) {
        console.log("new Item", item);
        return item;
      }
    });

    setDeleteCart(deletedProduct);
  };

  return (
    <div>
      <List dense={dense}>
        {
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                // onClick={() => removeProduct(id)}
              >
                <DeleteIcon onClick={() => removeProduct(id)} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={image}></Avatar>
              <ListItemText
                primary={title}
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItemAvatar>

            <ListItemText
              primary={price}
              secondary={secondary ? "Secondary text" : null}
            />

            <ListItemText
              primary={brand}
              secondary={secondary ? "Secondary text" : null}
            />

            <ListItemText
              primary={stock}
              secondary={secondary ? "Secondary text" : null}
            />
          </ListItem>
        }
      </List>
    </div>
  );
};

export default CartItem;

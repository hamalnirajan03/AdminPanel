import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import { useCartContext } from "../../context/Cart_Context";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Cart = () => {
  const { cart } = useCartContext();
  console.log("cart product", cart);
  // console.log("cart product id", cart.id);

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 6 }}
              variant="h6"
              component="div"
            >
              Name
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 6 }}
              variant="h6"
              component="div"
            >
              Price
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 6 }}
              variant="h6"
              component="div"
            >
              Brand
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 6 }}
              variant="h6"
              component="div"
            >
              Stock
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 6 }}
              variant="h6"
              component="div"
            >
              Delete
            </Typography>
          </Grid>
        </Grid>
        <Divider />
        {cart.map((curElem) => {
          return <CartItem key={curElem.id} {...curElem} />;
        })}
      </Box>
    </div>
  );
};

export default Cart;

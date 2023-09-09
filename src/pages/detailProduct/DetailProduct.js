import { Divider, Grid } from "@mui/material";
import { useParams, NavLink } from "react-router-dom";
import { Typography, Box, Button, Stack } from "@mui/material";
import { products } from "../../productSource";
import AddToCart from "../AddToCart/AddToCart";

const DetailProduct = () => {
  const params = useParams();
  // console.log(params);

  const newProduct = products.find((item, index, array) => {
    return item.id == params.pid;
  });

  // console.log(newProduct);

  const { image, title, brand, stock, description, price } = newProduct;
  return (
    <>
      <Box
        sx={{
          width: 800,
          height: "100%",
          p: 2,
          mt: 15,
          ml: 20,
          border: "1px dashed grey",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <img src={image} width="200px" height="200px" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">{title}</Typography>
            <Divider />
            <Typography>Brand:{brand}</Typography>
            <Typography>stock:{stock}</Typography>
            <Typography>{description}</Typography>

            <Typography variant="h6" sx={{ color: "orange" }}>
              Rs.{price}
            </Typography>
            <Stack spacing={3} direction="row" sx={{ mt: 5 }}>
              <Button variant="contained">Buy Now</Button>
            </Stack>
          </Grid>
        </Grid>
        {<AddToCart oneProduct={newProduct} />}
      </Box>
    </>
  );
};

export default DetailProduct;

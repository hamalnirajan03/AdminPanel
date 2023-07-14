import { Avatar, Divider, Grid } from "@mui/material";
import { products } from "../../productSource";
import { useParams } from "react-router-dom";
import { Typography, Box, Button, Stack } from "@mui/material";

const DetailProduct = () => {
  const params = useParams();
  console.log(params);

  const newProduct = products.find((item, index, array) => {
    return item.id == params.pid;
  });

  console.log(newProduct);
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
            <img src={newProduct.image} width="200px" height="200px" />
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6">{newProduct.title}</Typography>
            <Divider />
            <Typography>Brand:{newProduct.brand}</Typography>
            <Typography>stock:{newProduct.stock}</Typography>
            <Typography>{newProduct.description}</Typography>

            <Typography variant="h6" sx={{ color: "orange" }}>
              Rs.{newProduct.price}
            </Typography>
            <Stack spacing={3} direction="row" sx={{ mt: 5 }}>
              <Button variant="contained">Buy Now</Button>
              <Button variant="contained">Add to Cart</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DetailProduct;

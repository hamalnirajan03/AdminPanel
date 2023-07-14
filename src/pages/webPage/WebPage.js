import React from "react";
import WebAppBar from "../../components/webAppBar/WebAppBar";
import ViewProduct from "../viewProduct/ViewProduct";
import { products } from "../../productSource";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

import {
  Box,
  CardActionArea,
  Grid,
  CardHeader,
  Card,
  Avatar,
  CardMedia,
  Typography,
  IconButton,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const WebPage = () => {
  const navigate = useNavigate();

 

  return (
    <>
      <WebAppBar />
      <Box
        sx={{
          boxShadow: 3,
          width: "auto",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          // px: 5,
          pl: 3,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
          <Link to="/filterProducts">
            <Button variant="outlined">SmartPhones</Button>
          </Link>
          <Button variant="outlined">Laptops</Button>
          <Button variant="outlined">Men's Clothes</Button>
          <Button variant="outlined">Women's Clothes</Button>
        </Stack>
        <Grid container>
          {console.log("Products", products)}

          <Grid container rowSpacing={2} columnSpacing={1}>
            {products.map((products) => (
              <Grid item xs={3}>
                <Link
                  to={`/viewProducts/${products.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={products.image}
                            sx={{ bgcolor: red[500] }}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={products.title}
                        subheader="sep-14, 2016"
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        src={products.image}
                        alt="Paella dish"
                      />

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {products.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default WebPage;

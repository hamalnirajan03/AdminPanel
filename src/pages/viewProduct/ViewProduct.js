import React from "react";
import Navbar from "../../appbar/Appbar";
import SideBar from "../../sideBar/SideBar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { More } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { products } from "../../productSource";
import CardActionArea from "@mui/material/CardActionArea";
import { Link } from "react-router-dom";
const ViewProduct = () => {
  return (
    <>
      <Navbar />
      <SideBar />

      <Box
        sx={{
          boxShadow: 3,
          width: "69rem",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          px: 5,
          marginLeft: 30,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Grid container>
          {console.log("Products", products)}

          <Grid container rowSpacing={2} columnSpacing={1}>
            {products.map((products) => (
              <Grid item xs={4}>
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

export default ViewProduct;

import React, { useState } from "react";
import WebAppBar from "../../components/webAppBar/WebAppBar";
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
// import { Phone } from "@mui/icons-material";

const WebPage = () => {
  const navigate = useNavigate();

  const [filterPhone, setFilterPhone] = useState(products);
  const [activeButton, setActiveButton] = useState(null);

  // const filterSmartPhones = () => {
  // const filtered = products.filter((item, index) => {
  //   if (item.category === "smartphones") {
  //     return item;
  //   }
  // });
  // console.log("SmartPhones Only", filtered);
  // setFilterPhone(filtered);
  // navigate("/filterProducts");
  // };

  const handleButtonClicked = (buttonName) => {
    setActiveButton(buttonName);
  };

  const renderContent = () => {
    if (activeButton === 1) {
      const filtered = products.filter((item, index) => {
        if (item.category === "smartphones") {
          return item;
        }
      });
      console.log("SmartPhones Only", filtered);

      return (
        <>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {filtered.map((filtered) => (
              <Grid item xs={3}>
                <Link
                  to={`/viewProducts/${filtered.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={filtered.image}
                            sx={{ bgcolor: red[500] }}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={filtered.title}
                        subheader="sep-14, 2016"
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        src={filtered.image}
                        alt="Paella dish"
                      />

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {filtered.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (activeButton === 2) {
      const filteredLaptop = products.filter((item, index) => {
        if (item.category === "Laptop") {
          return item;
        }
      });
      console.log("Laptops Only", filteredLaptop);

      return (
        <>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {filteredLaptop.map((filteredLaptop) => (
              <Grid item xs={3}>
                <Link
                  to={`/viewProducts/${filteredLaptop.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={filteredLaptop.image}
                            sx={{ bgcolor: red[500] }}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={filteredLaptop.title}
                        subheader="sep-14, 2016"
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        src={filteredLaptop.image}
                        alt="Paella dish"
                      />

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {filteredLaptop.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (activeButton === 3) {
      const filteredMen = products.filter((item, index) => {
        if (item.category === "Men's Fashion") {
          return item;
        }
      });
      console.log("Mens Clothes Only", filteredMen);

      return (
        <>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {filteredMen.map((filteredMen) => (
              <Grid item xs={3}>
                <Link
                  to={`/viewProducts/${filteredMen.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={filteredMen.image}
                            sx={{ bgcolor: red[500] }}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={filteredMen.title}
                        subheader="sep-14, 2016"
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        src={filteredMen.image}
                        alt="Paella dish"
                      />

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {filteredMen.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else if (activeButton === 0) {
      return (
        <>
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
        </>
      );
    } else if (activeButton === 4) {
      const filteredAce = products.filter((item, index) => {
        if (item.category === "Computer Acessories") {
          return item;
        }
      });
      console.log("Mens Clothes Only", filteredAce);

      return (
        <>
          <Grid container rowSpacing={2} columnSpacing={1}>
            {filteredAce.map((filteredAce) => (
              <Grid item xs={3}>
                <Link
                  to={`/viewProducts/${filteredAce.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card sx={{ maxWidth: 300 }}>
                    <CardActionArea>
                      <CardHeader
                        avatar={
                          <Avatar
                            src={filteredAce.image}
                            sx={{ bgcolor: red[500] }}
                          ></Avatar>
                        }
                        action={
                          <IconButton aria-label="settings">
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={filteredAce.title}
                        subheader="sep-14, 2016"
                      />

                      <CardMedia
                        component="img"
                        height="194"
                        src={filteredAce.image}
                        alt="Paella dish"
                      />

                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          {filteredAce.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else {
      return (
        <>
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
        </>
      );
    }
  };

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
          {/* <Link to="/filterProducts"> */}

          <Button variant="outlined" onClick={() => handleButtonClicked(0)}>
            All
          </Button>

          <Button variant="outlined" onClick={() => handleButtonClicked(1)}>
            SmartPhones
          </Button>
          {/* </Link> */}
          <Button variant="outlined" onClick={() => handleButtonClicked(2)}>
            Laptops
          </Button>
          <Button variant="outlined" onClick={() => handleButtonClicked(3)}>
            Men's Clothes
          </Button>
          <Button variant="outlined" onClick={() => handleButtonClicked(4)}>
            Computer Acessories
          </Button>
        </Stack>

        <Grid container>{renderContent()}</Grid>
      </Box>
    </>
  );
};

export default WebPage;

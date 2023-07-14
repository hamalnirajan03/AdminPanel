import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PersonIcon from "@mui/icons-material/Person";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { blue, green } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const Widgets = ({ type }) => {
  let data;
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonIcon
            sx={{
              color: "red",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <AccountBalanceWalletIcon
            sx={{
              color: "purple",
            }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "Earnings",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnIcon
            sx={{
              color: "green",
            }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            sx={{
              color: "yellow",
            }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "15rem",
        height: "10rem",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        p: 1,
        m: 1,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <Grid
        sx={{
          alignItems: "center",
        }}
        container
        spacing={2}
        columnSpacing={2}
      >
        <Grid item xs={10}>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{
              paddingRight: 5,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            variant="h4"
            display="block"
            gutterBottom
            sx={{
              marginTop: 2,
              paddingRight: 5,
            }}
          >
            {data.isMoney && "$"} {amount}
          </Typography>
          <Typography
            variant="subtitle1"
            display="block"
            gutterBottom
            sx={{
              marginTop: 4,
              marginRight: 6,
            }}
          >
            {data.link}
          </Typography>
        </Grid>

        <Grid item xs={2}>
          <div>
            <ArrowUpwardIcon sx={{ color: green[500] }} /> {diff}
          </div>

          {
            data.icon
            // sx={{
            //   color: "blueviolet",
            //   //   alignSelf: "flex-end",
            //   marginTop: 8,
            // }}
          }
        </Grid>
      </Grid>
    </Box>
  );
};

export default Widgets;

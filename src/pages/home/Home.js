import React from "react";
import NavBar from "../../appbar/Appbar";
import SideBar from "../../sideBar/SideBar";
import WidgetsCon from "../../widgets/Widgets";
import Grid from "@mui/material/Grid";
import Featured from "../../components/featured/NewFeatured";
import Charts from "../../components/charts/Charts";
import Table from "../../components/Table/Table";
import Box from "@mui/material/Box";

const Home = () => {
  return (
    <>
      <NavBar />
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
          <WidgetsCon type="users" />
          <WidgetsCon type="orders" />
          <WidgetsCon type="earnings" />
          <WidgetsCon type="balance" />

          <Featured />
          <Charts title="Last 6 Months (Revenue)" aspect={2 / 1} />

          <Table />
        </Grid>
      </Box>
    </>
  );
};

export default Home;

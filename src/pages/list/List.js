import React from "react";
import NavBar from "../../appbar/Appbar";
import SideBar from "../../sideBar/SideBar";
import Grid from "@mui/material/Grid";
import DataTable from "../../components/dataTable/dataTable";

const List = () => {
  return (
    <>
      <NavBar />
      <SideBar />

      <Grid container>
        <DataTable />
      </Grid>
    </>
  );
};

export default List;

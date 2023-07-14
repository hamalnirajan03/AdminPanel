import React from "react";
import NavBar from "../../appbar/Appbar";
import SideBar from "../../sideBar/SideBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import Charts from "../../components/charts/Charts";
import WidgetsCon from "../../widgets/Widgets";
import Featured from "../../components/featured/NewFeatured";
import Table from "../../components/Table/Table";
import { useParams } from "react-router-dom";
import { userRows } from "../../DataTableSource";

// imports {useParams} from "react-router-dom"
const NewSingle = (id) => {
  const { id: String } = useParams();
  return (
    <>
      <NavBar />

      <SideBar />

      <Box
        sx={{
          boxShadow: 3,
          width: "71rem",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          px: 5,
          marginLeft: 26,
          borderRadius: 2,
          textAlign: "center",
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Grid container>
          {/* <Featured /> */}
          <Box
            sx={{
              boxShadow: 3,
              width: "23rem",
              height: "368px",
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "#fff",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              p: 1,
              mt: 1,
              borderRadius: 2,
              textAlign: "center",
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <Grid container>
              <Grid item xs={2}>
                <Button
                  sx={{
                    width: 20,
                    ml: 47,
                  }}
                >
                  Edit
                </Button>
              </Grid>

              <Typography variant="h4">Information</Typography>
            </Grid>

            <Divider />
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Avatar
                  src="https://www.biofamous.com/wp-content/uploads/2017/10/Niti-Shah-photo.jpg"
                  sx={{ width: 120, height: 120, mt: 5 }}
                />
              </Grid>

              <Grid item xs={8} sx={{ mt: 4 }}>
                <Typography align="left" variant="h5">
                  {userRows.username}
                </Typography>
                <Typography align="left" variant="h6">
                  Email: {userRows.email}
                </Typography>
                <Typography align="left" variant="h6">
                  Address: {userRows.address}
                </Typography>
                {/* <Typography align="left" variant="h6">
                  Country: Nepal
                </Typography> */}
              </Grid>
            </Grid>
          </Box>
          <Charts aspect={4 / 2} title="Users Last 6 months" />

          <Typography variant="h6">Latest Transactions</Typography>
          <Table />
        </Grid>
      </Box>
    </>
  );
};

export default NewSingle;

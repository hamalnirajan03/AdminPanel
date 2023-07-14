import React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CircularProgress from "@mui/material/CircularProgress";

const NewFeatured = () => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "20rem",
        height: "23rem",
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
      <Grid container spacing={12}>
        <Grid item xs={8}>
          <Typography variant="h5">Total Revenue</Typography>
        </Grid>

        <Grid item xs={2}>
          <MoreVertIcon />
        </Grid>
      </Grid>
      <CircularProgress variant="determinate" value={75} size={100} />
      <Typography variant="h5">75%</Typography>

      <Typography variant="h7">Total sales made today</Typography>
      <Typography variant="h4">$420</Typography>
      <Typography variant="h7">Hello this is the best descriptions</Typography>

      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h7">Target</Typography>
          <Typography variant="subtitle1">$12.8k</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h7">Last Week</Typography>
          <Typography variant="subtitle1">20.6k</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography variant="h7">Last Month</Typography>
          <Typography variant="subtitle1">10k</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NewFeatured;

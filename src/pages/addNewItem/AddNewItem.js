import React, { useState } from "react";
import NavBar from "../../appbar/Appbar";
import SideBar from "../../sideBar/SideBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Avatar, Button, TextField, Divider } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import userEvent from "@testing-library/user-event";

const AddNewItem = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <>
      <NavBar />
      <SideBar />

      <Box
        sx={{
          boxShadow: 3,
          width: "70rem",
          height: "35rem",
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
        <Typography variant="h4">{title}</Typography>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={3}>
              <Avatar
                src={file ? URL.createObjectURL(file) : "/broken-image.jpg"}
                sx={{
                  width: "120px",
                  height: "120px",
                  mt: 16,
                }}
              />

              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </Stack>
          </Grid>

          <Grid item xs={8}>
            <>
              {inputs.map((input) => (
                <div className="form-input" key={input.id}>
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                      {input.label}
                    </InputLabel>
                    <Input type={input.type} />
                  </FormControl>
                </div>
              ))}
              <Button variant="contained" sx={{ m: 3 }}>
                Save
              </Button>
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddNewItem;

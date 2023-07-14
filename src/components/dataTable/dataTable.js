import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { userRows } from "../../DataTableSource";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
// import SecurityIcon from "@mui/icons-material/Security";
// import LockOpenIcon from "@mui/icons-material/LockOpen";
import { LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import { green, grey } from "@mui/material/colors";
import { Avatar } from "@mui/material";

export default function DataTable() {
  const userColumns = [
    { field: "id", headerName: "ID" },
    {
      field: "img",
      headerName: "Image",
      renderCell: (params) => {
        // console.log(userRows.img);
        return <Avatar src={params.row.img}></Avatar>;
      },
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "address-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={access === "admin" ? green[600] : green[700]}
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsIcon />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOpenOutlined />}

            <Typography color={grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "100%",
        height: "35rem",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",

        p: 1,
        marginLeft: 30,
        borderRadius: 2,
        textAlign: "center",
        fontSize: "0.875rem",
        fontWeight: "700",
      }}
    >
      <div style={{ height: "25rem", width: "100%" }}>
        <Link to="/users/newUsers">
          <Button variant="outlined" sx={{ ml: 124, my: 2 }}>
            Add Users
          </Button>
        </Link>

        <DataGrid
          rows={userRows}
          columns={userColumns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[2, 10]}
          checkboxSelection
        />
      </div>
    </Box>
  );
}

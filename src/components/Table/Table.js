import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange, green, red } from "@mui/material/colors";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

const rows = [
  {
    id: 1133227,
    product: "Samsung S222 ultra 500TB",
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/galaxy_s22_vs_iphone_13_pro_gaming_gpu.jpg",
    customer: "Prinsha Dhami",
    amount: "220000",
    date: "13 February",
    cashMethod: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 1133225,
    product: "Lenovo Legion",
    img: "https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8MjM2Mjg1fGltYWdlL3BuZ3xoOGUvaDlmLzE3MTI2MTMyODA5NzU4LnBuZ3w4ODRlOTI4N2ZmMDY5ZDVlZGUwMDgwNWNkYTExYzZlNjcxODZhNWY2YjMzOTA4Y2VkZWFkYjc0MWVjOTczMTAy",
    customer: "Sagar Bista",
    date: "1 January",
    amount: "200000",
    cashMethod: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 1133226,
    product: "iphone 14 pro 256GB",
    img: "https://techpana.prixacdn.net/media/gadgets/iphone-14-pro-max.png",
    customer: "Niruta Hamal",
    date: "2 January",
    amount: "215000",
    cashMethod: "Online Payment",
    status: "Pending",
  },
  {
    id: 1133228,
    product: "CG AC",
    img: "https://www.cgdigital.com.np/api/images/products/rLIZR0_1645614696-CG12HP0102CE.webp",
    customer: "Rakesh Hamal",
    amount: "45000",
    date: "4 January",
    cashMethod: "eSewa",
    status: "Pending",
  },
  {
    id: 1133229,
    product: "Sony HeadPhone ",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6479/6479546_sd.jpg",
    customer: "Nirajan Hamal",
    amount: "22000",
    date: "1 March",
    cashMethod: "Online Payment",
    status: "Pending",
  },
  {
    id: 1133230,
    product: "jbl speaker",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6514/6514475_sd.jpg",
    customer: "Hitesh Thakuri",
    amount: "18000",
    date: "4 January",
    cashMethod: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 1133231,
    product: "Electric Guitar",
    img: "https://d1aeri3ty3izns.cloudfront.net/media/38/382873/600/preview_3.jpg",
    customer: "Chinmoy Mahato",
    amount: "25000",
    date: "23 April",
    cashMethod: "Cash on Delivery",
    status: "Approved",
  },
];

export default function BasicTable() {
  return (
    <Box
      sx={{
        boxShadow: 3,

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
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Tracking id</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Products</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Customer</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Amount</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Payment Method</Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((rows) => (
              <TableRow
                key={rows.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {rows.id}
                </TableCell>
                <TableCell align="left">
                  <Avatar src={rows.img} />
                  {rows.product}
                </TableCell>
                <TableCell align="left">{rows.customer}</TableCell>

                <TableCell align="left">{rows.date}</TableCell>
                <TableCell align="left">{rows.amount}</TableCell>
                <TableCell align="left">{rows.cashMethod}</TableCell>
                <TableCell
                  align="left"
                  sx={{ color: rows.status === "Approved" ? green : red }}
                >
                  {rows.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const data = [
  {
    name: "January",
    Total: 1200,
  },
  {
    name: "February",
    Total: "2100",
  },
  {
    name: "March",
    Total: 800,
  },
  {
    name: "April",
    Total: 1600,
  },
  {
    name: "May",
    Total: 900,
  },
  {
    name: "June",
    Total: 2500,
  },
];
const Charts = ({ aspect, title }) => {
  return (
    <Box
      sx={{
        boxShadow: 3,
        width: "42rem",
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
      <Typography variant="h6">{title}</Typography>
      <ResponsiveContainer width="100%" height="100%" aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default Charts;

// import React from "react";
// import { products } from "../../productSource";
// import { red } from "@mui/material/colors";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useNavigate } from "react-router-dom";

// import {
//   Box,
//   CardActionArea,
//   Grid,
//   CardHeader,
//   Card,
//   Avatar,
//   CardMedia,
//   Typography,
//   IconButton,
//   CardContent,
//   Stack,
//   Button,
// } from "@mui/material";
// import { Link } from "react-router-dom";

// const FilterProduct = () => {
//   return (
//     <>
//       <Grid container>
//         <Grid container rowSpacing={2} columnSpacing={1}>
//           {products.filter((items, index) => {
//             if (items.category === "smartphones") {
//               return (
//                 <Grid item xs={3}>
//                   <Card sx={{ maxWidth: 300 }}>
//                     <CardActionArea>
//                       <CardHeader
//                         avatar={
//                           <Avatar
//                             src={items.image}
//                             sx={{ bgcolor: red[500] }}
//                           ></Avatar>
//                         }
//                         action={
//                           <IconButton aria-label="settings">
//                             <MoreVertIcon />
//                           </IconButton>
//                         }
//                         title={items.title}
//                         subheader="sep-14, 2016"
//                       />
//                       <CardMedia
//                         component="img"
//                         height="194"
//                         src={items.image}
//                         alt="Paella dish"
//                       />
//                       <CardContent>
//                         <Typography variant="body2" color="text.secondary">
//                           {items.description}
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                   {/* </Link> */}
//                 </Grid>
//               );
//             }
//           })}
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default FilterProduct;

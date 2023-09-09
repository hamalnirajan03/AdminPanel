import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Lists = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <div>
      <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 3 }}
              variant="h6"
              component="div"
            >
              Name
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 7 }}
              variant="h6"
              component="div"
            >
              Price
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 7 }}
              variant="h6"
              component="div"
            >
              Brand
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ mt: 4, mb: 2, ml: 14 }}
              variant="h6"
              component="div"
            >
              Delete
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Demo>
            <List dense={dense}>
              {
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar src="https://images.macrumors.com/t/LOfu9VLk4WvjtKmnQtzdS67Rr3w=/800x0/smart/article-new/2016/05/iphone8gold.jpg"></Avatar>
                  </ListItemAvatar>

                  <ListItemText
                    primary="iphone 9"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              }
            </List>
          </Demo>
        </Grid>
      </Box>
    </div>
  );
};

export default Lists;

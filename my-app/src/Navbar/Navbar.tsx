import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Grid, IconButton } from "@mui/material";
const Navbar = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "end",
        mr: "7%",
        mt: "1%",
      }}
    >
      <IconButton sx={{ color: "red" }}>
        <ShoppingCartIcon />
      </IconButton>
    </Grid>
  );
};

export default Navbar;

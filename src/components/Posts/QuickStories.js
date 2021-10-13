import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
    

export default function QuickStories() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={2}>
          <Avatar sx={{ bgcolor: "#5499ff" }}>+</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar sx={{ bgcolor: "#ffe054" }}>A</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar sx={{ bgcolor: "#ff5466" }}>S</Avatar>
        </Grid>
        <Grid item xs={2}>
          <Avatar sx={{ bgcolor: "#be54ff" }}>N</Avatar> 
        </Grid>
      </Grid>
    </Box>
  );
}

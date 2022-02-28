import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GetUser from "./GetUser";
import IconButton from "@mui/material/IconButton";

const BorderedIconButton = styled(IconButton)`
  border: 2px solid lightseagreen;
`;

export default function QuickStories() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} justifyContent="center">
        <Grid item xs={2}>
          <BorderedIconButton variant="outlined">
            {" "}
            <GetUser />{" "}
          </BorderedIconButton>
        </Grid>
        <Grid item xs={2}>
          <BorderedIconButton variant="outlined">
            {" "}
            <GetUser />{" "}
          </BorderedIconButton>
        </Grid>
        <Grid item xs={2}>
          <BorderedIconButton variant="outlined">
            {" "}
            <GetUser />{" "}
          </BorderedIconButton>
        </Grid>
        <Grid item xs={2}>
          <BorderedIconButton variant="outlined">
            {" "}
            <GetUser />{" "}
          </BorderedIconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

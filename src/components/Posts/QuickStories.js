import React, {Component} from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import GetStories from './GetStories';


export default function QuickStories() {

  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={2}>
            
            <GetStories />
          </Grid>
          <Grid item xs={2}>
            <GetStories />
          </Grid>
          <Grid item xs={2}>
          <GetStories />
            
          </Grid>
          <Grid item xs={2}>
          <GetStories />
            
          </Grid>
        </Grid>
      </Box>
    );
  
}

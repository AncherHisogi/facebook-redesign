import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Posts from '../Posts/Posts';
import PostStory from '../Posts/PostStory'
import SocialEvents from '../Posts/SocialEvents';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TabPageOne() {
  return (
    <Box sx={{ flexGrow: 1,}}>
      <Grid container spacing={1} direction='row'>
        <Grid item xs={8}>
          
              <PostStory />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
              <Posts />
        </Grid>
        <Grid item xs={4}>
        
            <SocialEvents />
          
        </Grid>
        <Grid item xs={8}>
          
            
          
        </Grid>
      </Grid>
    </Box>
  );
}
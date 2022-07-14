import * as React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Posts from '../Posts/Posts';
import PostStory from '../Posts/PostStory'
import SocialEvents from '../Posts/SocialEvents';

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
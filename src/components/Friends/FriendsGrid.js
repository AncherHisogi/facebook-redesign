import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FriendCard from './FriendCard';

export default function FriendsGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '10px', paddingRight: '50px' }}>
      <Grid container spacing={1} direction='row'>
        <Grid item xs={4}>
            <FriendCard />
            
        </Grid>
        <Grid item xs={4}>
        
            <FriendCard />
        </Grid>
        <Grid item xs={4}>
          
            <FriendCard />
          
        </Grid>
      
      </Grid>
    </Box>
  );
}
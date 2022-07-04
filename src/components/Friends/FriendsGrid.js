import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FriendCard from './FriendCard';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

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
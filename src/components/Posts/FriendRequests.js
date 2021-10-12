import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FriendRequests() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{textAlign:"center", display:"flex", alignContent:'center'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            Placeholder Secondname
        </Grid>
        <Grid item xs={12} sx={{textAlign:"center", display:"flex", alignContent:'center'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            Placeholder Secondname
        </Grid>
        <Grid item xs={12} sx={{textAlign:"center", display:"flex", alignContent:'center'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            Placeholder Secondname
        </Grid>
        <Grid item xs={12} sx={{textAlign:"center", display:"flex", alignContent:'center'}}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            Placeholder Secondname
        </Grid>
      </Grid>
    </Box>
  );
}

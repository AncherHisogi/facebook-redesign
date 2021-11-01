import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import ActiveProfile from '../User/ActiveProfile';
import MusicPlayer from './MusicPlayer';
import Grid from '@mui/material/Grid';
import BottomMenuButtons from '../BottomMenu/BottomMenuButtons'


const useStyles = makeStyles({
    cardStyle:{
        opacity: 0.95,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: '70px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
})

export default function BottomMenu() {
  
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }} className={classes.cardStyle} style={{backgroundColor: "#3d5b8e"}}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          <ActiveProfile />
        </Grid>
        <Grid item xs={4}>
          <BottomMenuButtons />
        </Grid>
        <Grid item xs={4}>
          <MusicPlayer />
        </Grid>
      </Grid>
    </Box>
  );
}


// <Box sx={{ display: 'flex' }} className={classes.cardStyle} style={{backgroundColor: "#3d5b8e"}}>
// <CardContent sx={{ display: 'flex' }}>
//   <ActiveProfile/>
//   <MusicPlayer sx={{ display: 'flex', paddingLeft: '300px' }} />
// </CardContent>
// </Box>
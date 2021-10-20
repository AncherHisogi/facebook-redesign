import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from "@mui/styles";
import ActiveProfile from '../User/ActiveProfile';
import MusicPlayer from './MusicPlayer';

const useStyles = makeStyles({
    cardStyle:{
        opacity: 0.95,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: '500px',
        overflow: 'hidden',
        justifyContent: 'center',
        
        alignItems: 'center',
        display: 'flex',
    },
})

export default function BottomMenu() {
  
  const classes = useStyles()
  return (
    <Box sx={{ display: 'flex' }} className={classes.cardStyle} style={{backgroundColor: "#3d5b8e"}}>
        <CardContent sx={{ display: 'flex' }}>
          <ActiveProfile />
          <MusicPlayer sx={{ display: 'flex', paddingLeft: '300px' }} />
        </CardContent>
    </Box>
  );
}
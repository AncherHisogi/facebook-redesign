import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  mainChat: {
    background: "#f9f7fb",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 0px 10px 10px #dcdcdc",
    color: "black",
    overflow: "scroll",
    overflowX: "hidden",
    justifyContent: "center",
    paddingTop: "50px",
    paddingLeft: "50px",
    width: "100%"
  },
  sideChatWindow:{
    width: '100%',
  }
})


export default function ChatLayout() 
{
  const classes = useStyles();
  return (
    <Box sx={{display: "flex", flexGrow:1, overflow:'hidden', height: '100vh',width:'100%'}}>

      <Grid container spacing={1} direction='row'>
        <Grid item xs={8} className={classes.mainChat} >
          
        </Grid>
        <Grid item xs={4}>
       
            
          
        </Grid>
        <Grid item xs={8}>
         
        </Grid>
      </Grid>
    </Box>
  );
}
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import SideMenu from './SideMenu';
import Posts from './Posts/Posts';
import PostStory from './Posts/PostStory';


const useStyles = makeStyles({
    sideBar: {
      background: '#eeeced',
      border: 0,
      borderRadius: 3,
      color: 'black',
      height: '100vh',
      minHeight: '500px',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingTop: '30px', 
      minWidth: '300px',
    },
    mainMenu:{
      background: '#f9f7fb',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 0px 10px 1px lightgray',
      color: 'black',
      height: '100vh',
      overflow: 'scroll',
      overflowX: 'hidden',
      justifyContent: 'center',
      paddingTop: '50px',
    },
  });

function Layout() {
const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={2} className={classes.sideBar}>
        <SideMenu ></SideMenu>
      </Grid>
    
      

      <Grid item xs={10} className={classes.mainMenu}>
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
       <Posts />
       <Posts />
       <Posts />
       <Posts />
      </Grid>
    </Grid>
  );
}
export default Layout;

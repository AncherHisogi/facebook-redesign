import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import SideMenu from './SideMenu';
import TabBar from '../components/Tabs/TabBar'
import './Layout.css';

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
      borderRadius: 0,
      boxShadow: '0 0px 10px 10px #dcdcdc',
      color: 'black',
      height: '100vh',
      overflow: 'scroll',
      overflowX: 'hidden',
      justifyContent: 'center',
      paddingTop: '50px',
      paddingLeft: '50px',
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
       <TabBar />
      </Grid>

    </Grid>
  );
}
export default Layout;

import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from "@mui/material/Grid";
import SideMenu from './SideMenu';

const useStyles = makeStyles({
    sideBar: {
      background: '#f7f7f7',
      border: 0,
      borderRadius: 3,
      color: 'black',
      height: '100vh',
    },
    mainMenu:{
      background: '#ffffff',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 0px 30px 0px lightgray',
      color: 'black',
      height: '100vh',
    }
  });

function Layout() {
const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={2} className={classes.sideBar}>
        <SideMenu ></SideMenu>
      </Grid>

      <Grid item xs={10} className={classes.mainMenu}>
          main menu
      </Grid>
    </Grid>
  );
}
export default Layout;

import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { collapseClasses } from '@mui/material';

const useStyles = makeStyles({
    buttons: {
    color: 'black',
    }
  });

function SideMenu(){
const classes = useStyles();
  return (
    <ButtonGroup 
    orientation="vertical" 
    className={classes.buttonGroup}>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>News</Button>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>Messages</Button>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>Friends</Button>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>Communities</Button>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>Events</Button>
           <Button sx={{color: "black", justifyContent:'flex-start'}}>Pages</Button>
    </ButtonGroup>
  );
};

export default SideMenu;

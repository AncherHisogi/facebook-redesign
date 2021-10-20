import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    boxStyle:{
        display: 'flex',
        color: 'white',
        alignItems: 'center',
    }
})

export default function ActiveProfile() {
    const classes = useStyles()
  return (
    <Box className={classes.boxStyle}>
      <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/87.jpg" />
      test
      test
    </Box>
  );
}
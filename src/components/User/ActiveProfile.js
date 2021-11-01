import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
    boxStyle:{
        display: 'flex',
        color: 'white',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '70px',
        paddingLeft: '50px',
    }
})


export default function ActiveProfile() {
    const classes = useStyles()
  return (
    <Box className={classes.boxStyle}>
      <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/men/92.jpg" />
      <Stack sx={{paddingLeft:'20px'}}>
      <Typography variant="body1" sx={{opacity:0.9}}>
        Plebinski Testname
      </Typography>

      <Typography variant="body2"sx={{opacity:0.5}}>
        It's you
      </Typography>
      </Stack>
    </Box>
  );
}
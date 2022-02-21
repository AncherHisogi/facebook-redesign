import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SearchIcon from '@mui/icons-material/Search';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatIcon from '@mui/icons-material/Chat';
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const useStyles = makeStyles({
  customTheme: { 
      '&.MuiIconButton-colorInherit':{
        color:'white',
        opacity: 0.5,
      },
      '&.MuiLinearProgress-determinate':{
        color:'white'
      }
  },
  boxTheme: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingRight: '50px',
    height: '70px',
  }
})

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 9,
    top: 33,
    padding: '0 2px',
    backgroundColor: '#ce6151',
  },
}));

export default function BottomMenuButtons() {
  const classes = useStyles();
  return (
    <Box className={classes.boxTheme}>
      <StyledBadge badgeContent={4} color="primary">
      <IconButton aria-label="delete" color='inherit' className={classes.customTheme}>
        <NotificationImportantIcon sx={{ height: 28, width: 28 }}/>
      </IconButton>
      </StyledBadge>
      <IconButton aria-label="delete" color='inherit' className={classes.customTheme}>
        <QueueMusicIcon sx={{ height: 28, width: 28 }}/>
      </IconButton>
      <IconButton aria-label="add an alarm" color='inherit' className={classes.customTheme}>
        <SettingsIcon sx={{ height: 28, width: 28 }}/>
      </IconButton>
      <IconButton aria-label="add to shopping cart" color='inherit' className={classes.customTheme}>
       <SearchIcon sx={{ height: 28, width: 28 }}/>
      </IconButton>
      <StyledBadge badgeContent={2} color="primary">
      <IconButton aria-label="add to shopping cart" color='inherit' className={classes.customTheme}>
       <ChatIcon sx={{ height: 28, width: 28 }}/>
      </IconButton>
      </StyledBadge>

    </Box>
  );
}
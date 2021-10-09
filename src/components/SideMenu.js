import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import fbIcon from './fb_icon2.png';
import ArticleIcon from '@mui/icons-material/Article';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import EventIcon from '@mui/icons-material/Event';
import PagesIcon from '@mui/icons-material/Pages';
import { Shortcut } from '@mui/icons-material';


const useStyles = makeStyles ({
  imgStyle: {
    width: '70px',
    height: '70px',
    paddingBottom: '30px'

  },
  menuTextStyle:{},
  shortcutTextStyle:{
    paddingTop: '50px',
  }
})

export default function SideMenu() {
  const classes = useStyles()
  return (
    
    <ButtonGroup orientation="vertical" >
            <img src={fbIcon} alt="fbIcon" className={classes.imgStyle} />
            <Typography variant="subtitle1" gutterBottom component="div" sx={{color: "#4d4c4c"}} className={classes.menuTextStyle}>
            Menu
            </Typography>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<ArticleIcon/>}>News</Button>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<MessageIcon />}>Messages</Button>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<PeopleIcon/>}>Friends</Button>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<SupervisedUserCircleIcon/>}>Communities</Button>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<EventIcon/>}>Events</Button>
           <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<PagesIcon />}>Pages</Button>
           <Typography variant="subtitle1" gutterBottom component="div" sx={{color: "#4d4c4c"}} className={classes.shortcutTextStyle}>
            Shortcuts
            </Typography>
            <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
            <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
            <Button variant="text" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
    </ButtonGroup>
  );
}

// import * as React from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';
// import Typography from '@mui/material/Typography';
// import fbIcon from './fb_icon2.png';
// import ArticleIcon from '@mui/icons-material/Article';
// import MessageIcon from '@mui/icons-material/Message';
// import PeopleIcon from '@mui/icons-material/People';
// import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
// import EventIcon from '@mui/icons-material/Event';
// import PagesIcon from '@mui/icons-material/Pages';


// const useStyles = makeStyles ({
//   imgStyle: {
//     width: '70px',
//     height: '70px',
//     paddingBottom: '30px'

//   },
//   menuTextStyle:{},
//   shortcutTextStyle:{
//     paddingTop: '50px',
//   }
// })

// export default function SideMenu() {
//   const classes = useStyles()
//   return (
    
//     <ButtonGroup orientation="vertical" >
//             <img src={fbIcon} alt="fbIcon" className={classes.imgStyle} />
//            <Button variant="text" disableRipple={true} sx={{color: "black", justifyContent:'flex-start'}}>Menu</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<ArticleIcon/>}>News</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<MessageIcon />}>Messages</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<PeopleIcon/>}>Friends</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<SupervisedUserCircleIcon/>}>Communities</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<EventIcon/>}>Events</Button>
//            <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}} startIcon={<PagesIcon />}>Pages</Button>
//            <Button variant="text" sx={{color: "black", justifyContent:'flex-start'}}>Stories</Button>
//             <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
//             <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
//             <Button variant="string" sx={{color: "gray", justifyContent:'flex-start'}}>Pages</Button>
//     </ButtonGroup>
//   );
// }

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function SideMenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation="vertical">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
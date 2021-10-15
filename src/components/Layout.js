import * as React from "react";
import { makeStyles } from "@mui/styles";
import TabBar from "../components/Tabs/TabBar";
import "./Layout.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fbIcon from './fb_icon2.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PagesOutlinedIcon from '@mui/icons-material/PagesOutlined';
import FriendsLayout from "./Friends/FriendsLayout";

const useStyles = makeStyles({
  sideBar: {
    background: "#eeeced",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: "100vh",
    minHeight: "500px",
    // display: "flex",
    paddingTop: "30px",
    minWidth: "300px",
    overflow: 'hidden',
  },
  mainMenu: {
    background: "#f9f7fb",
    border: 0,
    borderRadius: 0,
    boxShadow: "0 0px 10px 10px #dcdcdc",
    color: "black",
    height: "100vh",
    overflow: "scroll",
    overflowX: "hidden",
    justifyContent: "center",
    paddingTop: "50px",
    paddingLeft: "50px",
    
  },
  imageStyle:{
    width: '70px',
    height: '70px',
    paddingLeft: '37px',
    paddingBottom: '50px',
  }
});



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
        <Box sx={{ p: 0 }}>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Layout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    components: {
      MuiTab: {
        styleOverrides: {
          root: {
            flexDirection: 'row',
            paddingLeft: '50px',
            fontSize: "0.8em",
            justifyItems: 'start',
            justifyContent: 'start',
          },
        },
      },
    },
  });

  return (
    <Box sx={{display: "flex", overflow:'hidden', height: '100vh'}}>
     
      <Tabs
        orientation="vertical"
        variant='fullWidth'
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.sideBar}
      >
        <img src={fbIcon} alt="fbIcon" className={classes.imageStyle} value='false'/>
        <Tab label="News" {...a11yProps(0)} theme={theme} icon={<ArticleOutlinedIcon/>}/>
        <Tab label="Messages" {...a11yProps(1)} theme={theme} icon={<ForumOutlinedIcon />}/>
        <Tab label="Friends" {...a11yProps(2)}theme={theme} icon={<PeopleAltOutlinedIcon />}/>
        <Tab label="Communities" {...a11yProps(3)} theme={theme} icon={<SupervisedUserCircleOutlinedIcon />}/>
        <Tab label="Events" {...a11yProps(4)} theme={theme} icon={<PagesOutlinedIcon />}/>
      </Tabs>
        <TabPanel value={value} index={0} className={classes.mainMenu}  >
        <TabBar></TabBar>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.mainMenu}>
        <TabBar></TabBar>
      </TabPanel>
      <TabPanel value={value} index={2}>
       item two
      </TabPanel> 
      <TabPanel value={value} index={3} className={classes.mainMenu}>
      <FriendsLayout />
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Five
      </TabPanel>
    </Box>
  );
}


export default Layout;

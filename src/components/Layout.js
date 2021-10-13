import * as React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import SideMenu from "./SideMenu";
import TabBar from "../components/Tabs/TabBar";
import "./Layout.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fbIcon from './fb_icon2.png';
import { minHeight, minWidth } from "@mui/system";

const useStyles = makeStyles({
  sideBar: {
    background: "#eeeced",
    border: 0,
    borderRadius: 3,
    color: "black",
    height: "100vh",
    minHeight: "500px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: "30px",
    minWidth: "300px",
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
    paddingBottom: '30px'
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Layout() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 424,
      }}
    >
      <Tabs
        orientation="vertical"
        variant='fullWidth'
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.sideBar}
      >
        <img src={fbIcon} alt="fbIcon" className={classes.imageStyle} />
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={1} className={classes.mainMenu}>
        <TabBar></TabBar>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
// <Grid container spacing={0}>
//   <Grid item xs={2} className={classes.sideBar}>
//       <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" orientation="vertical">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         Item Three
//       </TabPanel>
//     </Box>
//   </Grid>

//   <Grid item xs={10} className={classes.mainMenu}>
//    <TabBar />
//   </Grid>

// </Grid>

export default Layout;

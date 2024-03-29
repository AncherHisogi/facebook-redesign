import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FriendsGrid from "./FriendsGrid";

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

export default function FriendsLayout() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "rgba(255, 255, 255, .50)",
          backdropFilter: "blur(5px)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          npm
          aria-label="basic tabs example"
        >
          <Tab label="Allfriends" {...a11yProps(0)} />
          <Tab label="Work" {...a11yProps(1)} />
          <Tab label="Highschool" {...a11yProps(2)} />
          <Tab label="Hometown" {...a11yProps(3)} />
          <Tab label="Following" {...a11yProps(4)} />
          <Tab label="Recommendations" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
        <FriendsGrid />
      </TabPanel>
    </Box>
  );
}

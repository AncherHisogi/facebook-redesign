import React, { Component } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { IconButton } from "@mui/material";
import MessageIcon from '@mui/icons-material/Message';
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default class GetStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { avatar: [], personName: [], personCity: [] };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(({ results }) =>
        this.setState({
          avatar: results,
          personName: results,
          personCity: results,
        })
      );
  }

  render() {
    var picUrl;
    const persons = this.state.avatar.map(
      (item, i) => (picUrl = item.picture.large)
    );

    var userFirstName;
    const persons2 = this.state.personName.map(
      (item, i) => (userFirstName = item.name.first + " " + item.name.last)
    );

    var userCity;
    const persons3 = this.state.personCity.map(
      (item, i) => (userCity = item.location.city)
    );

    return (
      <Card
        sx={{
          display: "flex",
          maxHeight: 90,
          minHeight: 90,
          backgroundColor: "rgba(255, 255, 255, .50)",
          backdropFilter: "blur(5px)",
        }}
      >
         <CardMedia
            component="img"
            maxheight="80"
            minheight="80"
            sx={{width: 80}}
            image={picUrl}
            alt=""
           
          />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:"space-between", flex: 'auto'}}>
         
          <CardContent >
            <Typography gutterBottom variant="h8" component="div">
              {userFirstName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {userCity}
            </Typography>
          </CardContent>
            <CardActions >
            <IconButton variant="outlined" size="small" sx={{ justifyContent:"Right" }}>
                <MessageIcon />
                 </IconButton>
            </CardActions>
        </Box>
      </Card>
    );
  }
}

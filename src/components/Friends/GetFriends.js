import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default class GetStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { avatar: [], personName: [] , personCity: []};
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(({ results }) => this.setState({ avatar: results, personName: results, personCity: results}));
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
      
      <Card sx={{ maxWidth: 245, backgroundColor: 'rgba(255, 255, 255, .50)',
      backdropFilter: 'blur(5px)'}}>
         <CardMedia
          component="img"
          height="140"
          image= {picUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userFirstName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userCity}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Profile</Button>
          <Button size="small">Send Message </Button>
        </CardActions>
      </Card>
    );
  

  }
}

import React, {Component} from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";


export default class QuickStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {person: [], person2: []};
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(({ results }) => this.setState({ person: results}))
  }

  render (){
    var img
    var persons = this.state.person.map((item, i) =>(
      img = item.picture.thumbnail
    ))
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={2}>
            <Avatar alt="test1" src={img}>+</Avatar>
          </Grid>
          <Grid item xs={2}>
            <Avatar alt="test2" src={img}> </Avatar>
          </Grid>
          <Grid item xs={2}>
            <Avatar alt="test3" src={img} >S</Avatar>
          </Grid>
          <Grid item xs={2}>
            <Avatar alt="test4" src={img}>N</Avatar> 
          </Grid>
        </Grid>
      </Box>
    );
  }
}

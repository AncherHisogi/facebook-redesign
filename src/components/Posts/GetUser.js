import React, { Component } from "react";
import Avatar from "@mui/material/Avatar";

export default class GetStories extends React.Component {
  constructor(props) {
    super(props);

    this.state = { person: [], person2: [] };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then(({ results }) => this.setState({ person: results }));
  }

  render() {
    var picUrl;
    const persons = this.state.person.map(
      (item, i) => (picUrl = item.picture.thumbnail)
    );

    return (
      <Avatar alt="test1" sx={{ width: 40, height: 40 }} src={picUrl}> </Avatar>
    );
  }
}

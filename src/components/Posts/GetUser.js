import React from "react";
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
    
    var picUrl = this.state.person.map(
      (item, i) => (picUrl = item.picture.thumbnail)
    );

    return (
      <Avatar src={picUrl} />
    );
  

  }
}

import React, {Component} from 'react';
import Avatar from "@mui/material/Avatar";
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';

const BorderedIconButton = styled(IconButton)`
  border: 2px solid lightseagreen;
`;

export default class GetStories extends React.Component{
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
        var name
        const persons = this.state.person.map((item, i) =>(
          name = item.picture.thumbnail
        ))

        return(
            
            <BorderedIconButton variant="outlined"> <Avatar alt="test1" sx={{ width: 40, height: 40 }} src={name}></Avatar></BorderedIconButton>
            
        );
      }

}
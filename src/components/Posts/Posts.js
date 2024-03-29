
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { indigo } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AddCommentIcon from '@mui/icons-material/AddComment';
import IconButton from '@mui/material/IconButton';
import GetPosts from './GetPosts';



export default class Posts extends React.Component {

  componentDidMount(){
     
  }
  render (){
    return (
          <Card sx={{ maxHeight: 645, marginTop: 5, 
            //boxShadow: 'inset 0 0 2000px rgba(255, 255, 255, .5)',
            backgroundColor: 'rgba(255, 255, 255, .50)',
            backdropFilter: 'blur(5px)'}}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: indigo[500] }} aria-label="recipe">
                  F
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Firstname Lastname"
              subheader="September 14, 2016"
            />
            <GetPosts />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.        </Typography>
            </CardContent>
            <CardActions>
              <IconButton> <ThumbUpIcon /> </IconButton>
              <IconButton> <AddCommentIcon /> </IconButton>
            </CardActions>
          </Card>
        );
  }
}
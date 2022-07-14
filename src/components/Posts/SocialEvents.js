import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QuickStories from '../Posts/QuickStories'
import FriendRequests from './FriendRequests';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

var imageUrl = ['https://picsum.photos/400/600'] 

export default function SocialEvents() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{  margin: 5, padding: 2,  backgroundColor: 'rgba(255, 255, 255, .50)',
    backdropFilter: 'blur(5px)'}}>
      <Typography variant="subtitle1" color="text.primary">
          Stories
      </Typography>

      <QuickStories />

      <Typography variant="subtitle1" color="text.primary" sx={{paddingTop: 5}}>
          Upcoming Events
      </Typography>

      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt="green iguana"
      />
      <Typography variant="body2" color="text.secondary">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the le</Typography>
      <Typography variant="subtitle1" color="text.primary" sx={{paddingTop: 5}}>
          Friend Requests
      </Typography>
      <FriendRequests />
      <FriendRequests />
      <FriendRequests />
      <FriendRequests />
      
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <FriendRequests />
        <FriendRequests />
        <FriendRequests />
        <FriendRequests />
        <FriendRequests />
        <FriendRequests />
        <FriendRequests />
        </CardContent>
      </Collapse>
    </Card>
  );
}
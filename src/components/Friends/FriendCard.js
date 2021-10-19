import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const imgUrl = ['https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg']

// const useStyles = makeStyles({
//     avatarPicture:{
//       height: '70px'
//     }
// })


  export default function FriendCard() {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image= {imgUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Elon Musk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CEO at SpaceX
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Profile</Button>
          <Button size="small">Send Message </Button>
        </CardActions>
      </Card>
    );
  }
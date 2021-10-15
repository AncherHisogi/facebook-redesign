import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { maxWidth } from '@mui/system';

const imgUrl = ['https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg']

const useStyles = makeStyles({
    avatarPicture:{
        maxWidth: '30%',
        height: 'auto',
        objectFit: 'fill',
    }
})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default function FriendCard() {
    const classes = useStyles()
  return (
      <Paper sx={{ flexGrow: 1, maxWidth: 300}}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <img src={imgUrl} className={classes.avatarPicture}/>
        </Grid>
        <Grid item xs={4}>
        xs=4
        </Grid>
        <Grid item xs={4}>
        xs=4
        </Grid>
      </Grid>
    </Paper>
  );
}
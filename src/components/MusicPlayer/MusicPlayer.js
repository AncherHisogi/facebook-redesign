import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    cardStyle:{
        opacity: 0.95,
        zIndex: 1,
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: '50px',
        overflow: 'hidden',
    }
})

export default function MusicPlayer() {
  const theme = useTheme();
  const classes = useStyles()
  return (
    <Box sx={{ display: 'flex' }} className={classes.cardStyle} style={{backgroundColor: "#3d5b8e"}}>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <CardContent sx={{ display: 'flex' }}>
          <Typography component="div" variant="subtittle1">
            Live From Space
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 0 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
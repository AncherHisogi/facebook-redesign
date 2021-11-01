import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  customTheme: { 
      '&.MuiIconButton-colorInherit':{
        color:'white',
        opacity: 0.5,
      },
      '&.MuiLinearProgress-determinate':{
        color:'white'
      }
  },
  boxTheme: {
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    height: '70px',
    paddingRight: '50px',
  }
})
export default function MusicPlayer() {
  const [progress, setProgress] = React.useState(0);
  const theme = useTheme();
  const classes = useStyles();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 3 ;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box className={classes.boxTheme}>

         <IconButton aria-label="previous" color='inherit' className={classes.customTheme}>
           {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
         </IconButton>
         <IconButton aria-label="play/pause"  color='inherit' className={classes.customTheme}>
           <PauseIcon sx={{ height: 28, width: 28 }} />
         </IconButton>
         <IconButton aria-label="next"  color='inherit' className={classes.customTheme}>
           {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
         </IconButton>
         <Stack>
          <Typography variant="body2" sx={{paddingTop: 0, color: "white"}}>
              Loose yourself
            </Typography>
            <Typography variant="body2" sx={{paddingTop: 0, color: "white", opacity: 0.5,}}>
              Eminem
            </Typography>
         <LinearProgress variant="determinate" value={progress} sx={{width:'300px'}} color='inherit' className={classes.customTheme}/>
         </Stack>
         <IconButton aria-label="volume-up"  color='inherit' className={classes.customTheme}>
           <VolumeUpIcon sx={{ height: 28, width: 28 }} />
         </IconButton>
    </Box>
  );
}


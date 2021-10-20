import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
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
  }
})
export default function Musicplayer() {
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
    <Box sx={{ width: '300px', display: 'flex', alignItems:'center',}}>

         <IconButton aria-label="previous" color='inherit' className={classes.customTheme}>
           {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
         </IconButton>
         <IconButton aria-label="play/pause"  color='inherit' className={classes.customTheme}>
           <PlayArrowIcon sx={{ height: 38, width: 38 }} />
         </IconButton>
         <IconButton aria-label="next"  color='inherit' className={classes.customTheme}>
           {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
         </IconButton>
         <LinearProgress variant="determinate" value={progress} sx={{ width: '300px'}} color='inherit' className={classes.customTheme}/>
      
    </Box>
  );
}


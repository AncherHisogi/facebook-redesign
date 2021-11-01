import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import MessageIcon from '@mui/icons-material/Message';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FriendRequest() {
  return (
    <Paper sx={{ flexGrow: 1, margin:1, p:2, }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
            <Avatar sx={{bgcolor: deepOrange[500]}}>H</Avatar>
        </Grid>
        <Grid item xs={6}>
                    <Stack spacing={0}>
                    <Typography variant="body1" color="text.primary" sx={{paddingTop: 0}}>
                        Nametest  Secondna
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{paddingTop: 0}}>
                        Google inc.
                    </Typography>
                    </Stack>
        </Grid>
        <Grid item xs={4}>
              <IconButton> <MessageIcon /> </IconButton>
              <IconButton> <MoreVertIcon/> </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
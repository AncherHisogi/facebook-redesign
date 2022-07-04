import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddTaskIcon from '@mui/icons-material/AddTask';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import GetUser from "./GetUser";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FriendRequest() {
  return (
    <Paper sx={{ flexGrow: 1, margin:1, p:1, }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
            <GetUser />
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
        <Grid item xs={1}>
              <IconButton> <AddTaskIcon /> </IconButton>
              <IconButton> <MoreVertIcon/> </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
}
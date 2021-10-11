import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

export default function PostStory(){
    return(
              <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 645, margin: 5 }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Whats on your mind?"
                  inputProps={{ 'aria-label': 'post' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                  <SendIcon />
                </IconButton>
              </Paper>
    )
} 
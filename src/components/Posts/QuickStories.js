import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GetUser from "./GetUser";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 2.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export default function QuickStories() {
  return (
    <Box sx={{ flexGrow: 1, marginRight: "30px", }}>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={2}>
            <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <GetUser />
          </StyledBadge>
        </Grid>
        <Grid item xs={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <GetUser />
          </StyledBadge>
        </Grid>
        <Grid item xs={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <GetUser />
          </StyledBadge>
        </Grid>
        <Grid item xs={2}>
        <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
          >
            <GetUser />
          </StyledBadge>
        </Grid>
      </Grid>
    </Box>
  );
}

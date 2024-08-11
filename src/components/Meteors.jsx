import React from "react";
import { Box, styled } from '@mui/material';

const MeteorSpan = styled('span')(({ theme }) => ({
  position: 'absolute',
  width: '2px',
  height: '2px',
  background: theme.palette.grey[500],
  borderRadius: '9999px',
  boxShadow: '0 0 0 1px #ffffff10',
  animation: 'meteor linear infinite',
  opacity: 0,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0%',
    transform: 'translateY(-50%)',
    width: '50px',
    height: '1px',
    background: 'linear-gradient(90deg, #64748b, transparent)',
  },
  '@keyframes meteor': {
    '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 0},
    '20%': {opacity:0.6},
    '70%': { opacity: 0.6 },
    '100%': {
      transform: 'rotate(215deg) translateX(-500px)',
      opacity: 0,
    },
  },
}));

export const Meteors = ({ number = 20 }) => {
  return (
    <Box sx={{ 
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 0
    }}>
      {[...Array(number)].map((_, idx) => (
        <MeteorSpan
          key={idx}
          sx={{
            top: `${Math.random() * 110}%`,
            left: `${Math.random() * 110}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${Math.random() * 1 + 0.5}s`,
          }}
        />
      ))}
    </Box>
  );
};
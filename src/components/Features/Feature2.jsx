import React from 'react';
import { Typography, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WebIcon from '@mui/icons-material/Web';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

const Feature2 = () => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
      <Box>
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          fontSize: '32px',
          mb: 2,
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(45deg, #e0e0ff, #ffffff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          Easy sharing
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255, 255, 255, 0.9)', 
          fontSize: '20px',
          lineHeight: 1.5,
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}>
          Share your curated content to the people around. 
        </Typography>
      </Box>
      <Box sx={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        top: '120%',
        left: '25%',
        borderRadius: '50%',
        border: '2px dashed rgba(255, 255, 255, 0.3)',
        animation: 'rotate 20s linear infinite',
        '@keyframes rotate': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      }}>
        <ShoppingCartIcon 
          sx={{
            position: 'absolute',
            top: '0',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            color: 'white',
            animation: 'rotateReverse 20s linear infinite',
            '@keyframes rotateReverse': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(-360deg)',
              },
            },
          }}
        />
        <LanguageIcon
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            color: 'white',
            animation: 'staticRotate 20s linear infinite',
            '@keyframes staticRotate': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(-360deg)',
              },
            },
          }}
        />
        <CodeIcon
          sx={{
            position: 'absolute',
            top: '50%',
            left: '100%',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            color: 'white',
            animation: 'staticRotate 20s linear infinite',
            '@keyframes staticRotate': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(-360deg)',
              },
            },
          }}
        />
        <CloudIcon
          sx={{
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translate(-50%, -50%)',
            width: '40px',
            height: '40px',
            color: 'white',
            animation: 'staticRotate 20s linear infinite',
            '@keyframes staticRotate': {
              '0%': {
                transform: 'translate(-50%, -50%) rotate(0deg)',
              },
              '100%': {
                transform: 'translate(-50%, -50%) rotate(-360deg)',
              },
            },
          }}
        />
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '2px dashed rgba(255, 255, 255, 0.3)',
          animation: 'staticRotate 10s linear infinite',
          '@keyframes staticRotate': {
            '0%': {
              transform: 'translate(-50%, -50%) rotate(0deg)',
            },
            '100%': {
              transform: 'translate(-50%, -50%) rotate(-360deg)',
            },
          },
        }}>
          <WebIcon
            sx={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              color: 'white',
              animation: 'counterRotate 20s linear infinite',
              '@keyframes counterRotate': {
                '0%': {
                  transform: 'translate(-50%, -50%) rotate(-360deg)',
                },
                '100%': {
                  transform: 'translate(-50%, -50%) rotate(0deg)',
                },
              },
            }}
          />
          <StorageIcon
            sx={{
              position: 'absolute',
              top: '50%',
              left: '100%',
              transform: 'translate(-50%, -50%)',
              width: '40px',
              height: '40px',
              color: 'white',
              animation: 'counterRotate 20s linear infinite',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Feature2;
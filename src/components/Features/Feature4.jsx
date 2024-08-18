import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import CategoryIcon from '@mui/icons-material/Category';
import XIcon from '@mui/icons-material/X';
import RedditIcon from '@mui/icons-material/Reddit';
import SearchIcon from '@mui/icons-material/Search';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { GlassCard } from '../UI/WobbleCard';
import { keyframes } from '@emotion/react';

const particleAnimation = keyframes`
  0% {
    left: -10px;
    opacity: 0;
    transform: scale(0.5);
  }
  10% {
    opacity: 1;
    transform: scale(1);
  }
  90% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    left: calc(100% + 10px);
    opacity: 0;
    transform: scale(0.5);
  }
`;

const borderLightUpAnimation = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(138, 43, 226, 0.1);
  }
  25% {
    box-shadow: 0 0 5px 2px rgba(138, 43, 226, 0.2), 0 0 8px 3px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 0 0 8px 3px rgba(138, 43, 226, 0.3), 0 0 12px 5px rgba(255, 255, 255, 0.15);
  }
  75% {
    box-shadow: 0 0 5px 2px rgba(138, 43, 226, 0.2), 0 0 8px 3px rgba(255, 255, 255, 0.1);
  }
`;

const Feature4 = ({isMobile}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeParticles, setActiveParticles] = useState([false, false, false,false]);
  const [currentLine, setCurrentLine] = useState(0);
  const [activeBox, setActiveBox] = useState(null);

  useEffect(() => {
    const shootParticle = () => {
      setActiveParticles(prev => {
        const newState = [...prev];
        newState[currentLine] = true;
        return newState;
      });
      
      setTimeout(() => {
        setActiveParticles(prev => {
          const newState = [...prev];
          newState[currentLine] = false;
          return newState;
        });
        setActiveBox(currentLine + 1);
        setTimeout(() => {
          setActiveBox(null);
        }, 500);
        setCurrentLine((prev) => (prev + 1) % 3); //Change the 3 based on the number of lines
      }, 700); // Match this with the particle animation duration
    };

    const intervalId = setInterval(() => {
      if (!activeParticles[currentLine]) {
        shootParticle();
      }
    }, 500); // Adjust timing as needed

    return () => clearInterval(intervalId);
  }, [activeParticles, currentLine]);

  const iconStyle = {
    fontSize: { xs: '24px', md: '38px' },
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    color: 'white'
  };

  const tagStyle = {
    fontSize: { xs: '10px', md: '12px' },
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'center',
    marginTop: '4px',
  };

  const lineStyle = {
    flex: { xs: 1, md: 2 },
    height: '2.5px',
    backgroundColor: '#333',
    mx: 0,
    position: 'relative',
    overflow: 'hidden',
  };

  const particleStyle = (index) => ({
    position: 'absolute',
    width: { xs: '20px', md: '40px' },
    height: { xs: '4px', md: '8px' },
    borderRadius: '4px',
    background: 'linear-gradient(90deg, #8A2BE2, #FFF)',
    boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.7), 0 0 30px 10px rgba(138, 43, 226, 0.7)',
    top: '-3px',
    left: '-10px',
    animation: activeParticles[index] ? `${particleAnimation} 0.7s ease-in-out` : 'none',
    opacity: activeParticles[index] ? 1 : 0,
    zIndex: '1'
  });

  const boxStyle = (index) => ({
    border: '1.5px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    padding: { xs: '4px', md: '8px' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    animation: activeBox === index ? `${borderLightUpAnimation} 0.3s linear` : 'none',
  });

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
    }}>
      <Typography variant="h4" sx={{ 
        fontWeight: 700, 
        fontSize: {xs:'26px',md:'32px'},
        mb: 0.5,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        background: 'linear-gradient(45deg, #e0e0ff, #ffffff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Smart Context Discovery
      </Typography>
      <Typography variant="body1" sx={{ 
        color: 'rgba(255, 255, 255, 0.5)', 
        fontSize: {xs:'0.8rem',md:'1.1rem'},
        lineHeight: 1.5,
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
      }}>
        {!isMobile ? 'Provide links to the content of your choice and we will find similar content for you to curate and share.': 'Provide links and we will find similar content for you.'}
      </Typography>
      <GlassCard
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          mt: 1,
          padding: { xs: 1, md: 3 },
          height: { xs: 'auto', md: '240px' },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
          <Box sx={{ ...boxStyle(0), gap: { xs: '5px', md: '10px' }, zIndex: '10' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <DescriptionIcon sx={{ ...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <XIcon sx={{ ...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <RedditIcon sx={{ ...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
              <Typography sx={tagStyle}>Input</Typography>
            </Box>
          </Box>
          <Box sx={lineStyle}>
            <Box sx={particleStyle(0)} />
          </Box>
          <Box sx={boxStyle(1)}>
            <CategoryIcon sx={{ ...iconStyle, fontSize: { xs: '24px', md: '40px' } }} />
            <Typography sx={tagStyle}>Categorize</Typography>
          </Box>
          <Box sx={lineStyle}>
            <Box sx={particleStyle(1)} />
          </Box>
          <Box sx={boxStyle(2)}>
            <FindInPageIcon sx={{ ...iconStyle, fontSize: { xs: '24px', md: '40px' } }} />
            <Typography sx={tagStyle}>Discover</Typography>
          </Box>
          <Box sx={lineStyle}>
            <Box sx={particleStyle(2)} />
          </Box>
          <Box sx={boxStyle(3)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: { xs: '5px', md: '10px' } }}>
              <WhatsAppIcon sx={{...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
              <XIcon sx={{ ...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
              <PictureAsPdfIcon sx={{...iconStyle, fontSize: { xs: '20px', md: '32px' } }} />
            </Box>
            <Typography sx={tagStyle}>Output</Typography>
          </Box>
        </Box>
      </GlassCard>
    </Box>
  );
};

export default Feature4;
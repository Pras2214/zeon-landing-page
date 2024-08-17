import React,{ useState } from 'react';
import { Typography, Box } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { GlassCard } from '../UI/WobbleCard';

const WorkProcessItem = ({ icon, title, description, isHovered }) => (
  <Box sx={{ 
    width:{xs:"250px",md:'350px'},
    display: 'flex', 
    alignItems: 'center', 
    borderRadius:'10px',
    boxShadow: isHovered ? "0px 4px 7px rgba(99, 102, 241, 0.1), 0 4px 7px rgba(139, 92, 246, 0.1)": 'none',
    transition: 'all 0.3s ease',
    '&:hover':{
      transform:'scale(1.05)'
    }
  }}
  >
    <Box sx={{
      background: 'transparent',
      borderRadius: '50%',
      p: 1,
      mr: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {React.cloneElement(icon, { sx: { color: 'white', fontSize: 30 } })}
    </Box>
    <Box>
      <Typography variant="h6" sx={{ fontSize: '14px' ,color: 'white', fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 0.5}}>
        {description}
      </Typography>
    </Box>
  </Box>
);

export default function Feature3({isMobile}) {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
      <Box>
        <Typography variant="h4" sx={{ 
          fontWeight: 700, 
          fontSize: {xs:'26px',md:'32px'},
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          background: 'linear-gradient(45deg, #e0e0ff, #ffffff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb:0.5
        }}>
          Topic Merging
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255, 255, 255, 0.5)', 
          fontSize: {xs:'16px',md:'20px'},
          lineHeight: 1.5,
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}>
          Merge multiple topics to create a multicontextual topic
        </Typography>
      </Box>
      <GlassCard 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{mt: 1, p:isMobile?1.5:3, pl:isMobile?1:2, pr:2,display:'flex', flexDirection:'column', gap:isMobile?0:2, height: {xs:'160px',md:'240px'} }}>
        <WorkProcessItem
          icon={<PersonOutlineIcon />}
          title="Select the Topics"
          description={!isMobile ? "Select topics to merge" : ""}
          isHovered={isHovered}
        />
        <WorkProcessItem
          icon={<ShoppingBagOutlinedIcon />}
          title="Merge the Topics"
          description={!isMobile ? "Merge those topics to create a new topic" : ""}
          isHovered={isHovered}
        />
        <WorkProcessItem
          icon={<AssignmentOutlinedIcon />}
          title={!isMobile?"Enjoy!":"Enjoy the new Topic with merged context"}
          description={!isMobile ? "A new topic will be created with the context of all the merged topics" : ""}
          isHovered={isHovered}
        />
      </GlassCard>
    </Box>
  );
}
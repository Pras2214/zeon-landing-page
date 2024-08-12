import React, { useState } from 'react';
import { styled, Box, Container, Typography, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import CreateIcon from '@mui/icons-material/Create';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { motion, AnimatePresence } from 'framer-motion';

const UseCasesSection = styled(Box)({
  padding: '64px 0',
  background: 'transparent',
  position: 'relative',
  zIndex: 1,
});

const GlassCard = styled(Box)({
  background: 'rgba(28,28,39, 0.8)',
  borderRadius: '24px',
  padding: '32px',
  width: '100%',
  height: '100%',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
  position: 'relative',
  zIndex: 40,
});

const IconWrapper = styled(Box)({
  background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
  borderRadius: '50%',
  padding: '16px',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '64px',
  height: '64px',
});

function UseCases() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const useCases = [
    { icon: <PersonIcon fontSize="large" />, title: 'Personal Knowledge Management', description: 'Organize and connect your thoughts, notes, and research in one place.' },
    { icon: <CreateIcon fontSize="large" />, title: 'Content Curation for Bloggers', description: 'Streamline your content creation process by curating and organizing ideas and resources.' },
    { icon: <SchoolIcon fontSize="large" />, title: 'Research Aggregation for Students', description: 'Gather, analyze, and synthesize information from multiple sources for in-depth research.' },
    { icon: <BookmarkIcon fontSize="large" />, title: 'Topic-based Bookmarking', description: 'Save and categorize web content efficiently for easy retrieval and reference.' },
    { icon: <TrendingUpIcon fontSize="large" />, title: 'Trend Analysis for Marketers', description: 'Track and analyze industry trends by curating relevant content from various sources.' },
    { icon: <BusinessCenterIcon fontSize="large" />, title: 'Project Management for Teams', description: 'Collaborate and organize project-related information, tasks, and resources in one central hub.' }
  ];

  return (
    <UseCasesSection>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" sx={{ color: 'white', mb: 2, textAlign: 'center', fontWeight: 700, fontSize: '48px', lineHeight: 1.2, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
          Transform Your Digital Content Management
        </Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 6, textAlign: 'center', fontSize: '18px' }}>
          Revolutionize your digital workflow with Zeon
        </Typography>
        <Grid container spacing={4}>
          {useCases.map((useCase, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box
                sx={{
                  position: 'relative',
                  height: '100%',
                  padding: '8px',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      style={{
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '30px',
                        background: 'linear-gradient(135deg, rgba(50, 50, 90, 0.8), rgba(60, 60, 100, 0.8))',
                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.2) inset, 0 8px 20px rgba(0, 0, 0, 0.3)',
                        zIndex: 20,
                      }}
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.2 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.2, delay: 0.1 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <GlassCard sx={{
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
                  },
                }}>
                  <IconWrapper sx={{
                    background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
                    boxShadow: '0 4px 10px rgba(99, 102, 241, 0.3)',
                    transition: 'transform 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'rotate(360deg)',
                    },
                  }}>
                    {React.cloneElement(useCase.icon, { sx: { color: 'white', fontSize: 32 } })}
                  </IconWrapper>
                  <Typography variant="h6" sx={{ 
                    color: 'white', 
                    mb: 2, 
                    fontWeight: 600, 
                    fontSize: '24px',
                  }}>
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '16px',
                    lineHeight: 1.6,
                  }}>
                    {useCase.description}
                  </Typography>
                </GlassCard>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </UseCasesSection>
  );
}

export default UseCases;
import React, { useRef, useState, useEffect } from 'react';
import { Box, Typography, styled } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import MergeTypeIcon from '@mui/icons-material/MergeType';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';

const features = [
  { icon: <CategoryIcon fontSize="large" />, title: 'Intelligent Link Categorization', description: 'Automatically organize your links into relevant categories.' },
  { icon: <FindInPageIcon fontSize="large" />, title: 'Automated Content Discovery', description: 'Find related content based on your existing links and interests.' },
  { icon: <MergeTypeIcon fontSize="large" />, title: 'Topic Cross-pollination', description: 'Connect ideas across different topics for deeper insights.' },
  { icon: <ImportExportIcon fontSize="large" />, title: 'Customizable Export', description: 'Export your curated content in various formats for easy sharing.' },
  { icon: <SearchIcon fontSize="large" />, title: 'Context Search', description: 'Search for content with context from across the web.' },
];

const FeaturesSection = styled(Box)({
  padding: '64px 0',
  background: 'transparent',
  position: 'relative',
  zIndex: 1,
});

const GlassCard = styled(Box)({
  background: 'rgba(90, 90, 90, 0.25)',
  borderRadius: '24px',
  padding: '32px',
  width: '100%',
  height: '100%',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
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

function FeatureCard({ icon, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlassCard
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box sx={{ position: 'relative', mb: 2 }}>
        <IconWrapper
          sx={{
            transition: 'transform 0.3s ease-in-out',
            transform: isHovered ? 'rotate(360deg)' : 'rotate(0deg)',
          }}
        >
          {React.cloneElement(icon, { sx: { color: 'white', fontSize: 32 } })}
        </IconWrapper>
      </Box>
      <Typography variant="h5" sx={{ color: 'white', mb: 2, fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        {description}
      </Typography>
    </GlassCard>
  );
}

function Features() {
  const scrollRef = useRef(null);
  const [items, setItems] = useState([...features, ...features, ...features]);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      
      if (scrollLeft + clientWidth > scrollWidth - clientWidth) {
        // User is near the end, append items to the end
        setItems(prevItems => [...prevItems, ...features]);
        container.scrollLeft -= features.length * clientWidth / items.length;
      } else if (scrollLeft < clientWidth) {
        // User is near the start, prepend items to the beginning
        setItems(prevItems => [...features, ...prevItems]);
        container.scrollLeft += features.length * clientWidth / items.length;
      }
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [items]);

  return (
    <FeaturesSection>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          color: 'white',
          mb: 6,
          textAlign: 'center',
          fontWeight: 700,
          fontSize: { xs: '2.5rem', md: '3.5rem' },
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        }}
      >
        Powerful Features
      </Typography>
      <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.8)', mb: 6, textAlign: 'center', fontSize: '18px' }}>
      Get Latest Relevant Content Delivered to Your Inbox
        </Typography>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '&::-webkit-scrollbar': { display: 'none' },
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          width: '100%',
        }}
      >
        {items.map((feature, index) => (
          <React.Fragment key={index}>
            <Box sx={{ scrollSnapAlign: 'start', minWidth: { xs: '80vw', sm: '60vw', md: '40vw' }, padding: '0 1rem' }}>
              <FeatureCard {...feature} />
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </FeaturesSection>
  );
}

export default Features;
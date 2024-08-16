import React, { useState, useEffect } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import FolderIcon from '@mui/icons-material/Folder';
import { GlassCard } from '../UI/WobbleCard';
import { motion, AnimatePresence } from 'framer-motion';

const Feature4 = () => {
  const [links, setLinks] = useState([
    { id: 1, color: '#FF6B6B', category: null },
    { id: 2, color: '#4ECDC4', category: null },
    { id: 3, color: '#45B7D1', category: null },
    { id: 4, color: '#FFA07A', category: null },
    { id: 5, color: '#98D8C8', category: null },
    { id: 6, color: '#FF6B6B', category: null },
    { id: 7, color: '#4ECDC4', category: null },
    { id: 8, color: '#45B7D1', category: null },
  ]);

  const categories = ['Work', 'Personal', 'Research'];

  useEffect(() => {
    const interval = setInterval(() => {
      setLinks(prevLinks => {
        const unsortedLinks = prevLinks.filter(link => link.category === null);
        if (unsortedLinks.length > 0) {
          const randomIndex = Math.floor(Math.random() * unsortedLinks.length);
          const randomCategory = categories[Math.floor(Math.random() * categories.length)];
          const updatedLinks = [...prevLinks];
          updatedLinks[prevLinks.indexOf(unsortedLinks[randomIndex])].category = randomCategory;
          return updatedLinks;
        }
        return prevLinks;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between',
    }}>
      <Typography variant="h4" sx={{ 
        fontWeight: 700, 
        fontSize: '32px',
        mb: 2,
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        background: 'linear-gradient(45deg, #e0e0ff, #ffffff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        Smart Link Organization
      </Typography>
      <Typography variant="body1" sx={{ 
        color: 'rgba(255, 255, 255, 0.9)', 
        fontSize: '20px',
        lineHeight: 1.5,
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        mb: 2,
      }}>
        Automatically sort your links into relevant categories, saving time and enhancing your content curation process.
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', height: '60%' }}>
        <Box sx={{ width: '60%', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start' }}>
          <AnimatePresence>
            {links.map(link => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
                style={{ margin: '5px' }}
              >
                <GlassCard
                  sx={{
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: link.color,
                  }}
                >
                  <LinkIcon sx={{ color: 'white' }} />
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
        <Box sx={{ width: '35%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
          {categories.map(category => (
            <GlassCard
              key={category}
              sx={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <FolderIcon sx={{ mr: 2, color: 'white' }} />
              <Typography variant="h6" sx={{ color: 'white' }}>{category}</Typography>
              <Box sx={{ ml: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', width: '50%' }}>
                <AnimatePresence>
                  {links.filter(link => link.category === category).map(link => (
                    <motion.div
                      key={link.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ margin: '2px' }}
                    >
                      <Box
                        sx={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: link.color,
                          borderRadius: '50%',
                        }}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            </GlassCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Feature4;
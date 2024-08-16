import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const GlassBox = styled(Box)({
  background: 'rgba(28,28,39,0.8)',
  borderRadius: '24px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  backdropFilter: 'blur(8px)',
  overflow: 'hidden',
});

export default function Feature2() {
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
          24/7 Curation 
        </Typography>
        <Typography variant="body1" sx={{ 
          color: 'rgba(255, 255, 255, 0.9)', 
          fontSize: '20px',
          lineHeight: 1.5,
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        }}>
          Your personal curator on your finger tips whenever you need.
          </Typography>
      </Box>
      <GlassBox sx={{ 
        mt: 3,
        position: 'relative',
        width: '100%',
        height: '200px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75 }}
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(139, 92, 246, 0.2) 50%, rgba(28, 28, 39, 0) 70%)',
            borderRadius: '50%',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)',
            filter: 'blur(8px)',
          }}
        />
        <CountDown />
      </GlassBox>
    </Box>
  );
}

const CountDown = () => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      if (count === 24 && count2 === 7) {
        clearInterval(interval);
      } else {
        setCount(count + 1);
        setCount2(count2 < 7 ? count2 + 1 : count2);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [count, count2, isInView]);

  return (
    <motion.div
      ref={ref}
      className="font-bold cursor-default"
      style={{
        fontSize: '70px',
        background: 'linear-gradient(45deg, #e0e0ff, #ffffff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        textShadow: '0 0 10px rgba(224, 224, 255, 0.05), 0 0 20px rgba(224, 224, 255, 0.05), 0 0 30px rgba(224, 224, 255, 0.05)',
        fontWeight: 'bold',
        filter: 'drop-shadow(0 0 10px rgba(224, 224, 255, 0.05))'
      }}
    >
      {count}/{count2}
    </motion.div>
  );
};
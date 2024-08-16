import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';

const CursorBall = styled(animated.div)(({ theme }) => ({
  position: 'fixed',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 9999,
  width: '12px',
  height: '12px',
  backgroundColor: '#6366f1', // Changed to match the theme color
  boxShadow: '0 0 10px 2px rgba(99, 102, 241, 0.7)', // Adjusted glow effect
}));

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springProps = useSpring({
    to: { x: position.x, y: position.y - 20 },
    config: { mass: 1, tension: 120, friction: 14 }, // Adjust these values for desired smoothness
  });

  useEffect(() => {
    let timeoutId;
    const onMouseMove = (e) => {
      // Add a slight delay
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 0); // 50ms delay, adjust as needed
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <CursorBall style={springProps} />
  );
}

export default CustomCursor;
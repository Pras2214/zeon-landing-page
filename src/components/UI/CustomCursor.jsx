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
  backgroundColor: '#6366f1',
  boxShadow: '0 0 10px 2px rgba(99, 102, 241, 0.7)',
  '@media (max-width: 1050px)': {
    display: 'none',
  },
}));

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const springProps = useSpring({
    to: { x: position.x, y: position.y - 20 },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  useEffect(() => {
    let timeoutId;
    const onMouseMove = (e) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      }, 0);
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
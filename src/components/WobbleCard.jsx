"use client";
import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { styled } from '@mui/material/styles';
import { throttle } from 'lodash';

const GlassCard = styled(motion.section)({
    background: 'rgba(28,28,39,0.8)',
    borderRadius: '24px',
    padding: '32px',
    width: '100%',
    height: '100%',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    overflow: 'hidden',
    position: 'relative',
  });

const WobbleCard = React.memo(({ children, containerClassName, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback(
    throttle((event) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) / 40;
      const y = (clientY - (rect.top + rect.height / 2)) / 40;
      setMousePosition({ x, y });
    }, 50),
    []
  );

  const handleMouseEnter = useCallback(() => setIsHovering(true), []);
  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setMousePosition({ x: 0, y: 0 });
  }, []);

  const cardStyle = useMemo(() => ({
    transform: isHovering
      ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
      : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
    transition: "transform 0.1s ease-out",
  }), [isHovering, mousePosition]);

  const innerStyle = useMemo(() => ({
    transform: isHovering
      ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.015, 1.015, 1)`
      : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
    transition: "transform 0.1s ease-out",
  }), [isHovering, mousePosition]);

  return (
    <GlassCard
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={cardStyle}
      className={containerClassName}
    >
      <motion.div
        style={{
          ...innerStyle,
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
        className={className}
      >
        <Noise />
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </motion.div>
    </GlassCard>
  );
});

const Noise = React.memo(() => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
        maskImage: "radial-gradient(#fff, transparent 75%)",
      }}
    ></div>
  );
});

export default WobbleCard;
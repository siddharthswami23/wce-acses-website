import React from 'react';

const LightRays = ({
  raysOrigin,
  raysColor,
  raysSpeed,
  lightSpread,
  rayLength,
  followMouse,
  mouseInfluence,
  noiseAmount,
  distortion,
  className,
}) => {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: '100%',
        background: `radial-gradient(circle at ${raysOrigin.replace('-', ' ')}, ${raysColor} 0%, transparent 80%)`,
        opacity: 0.2,
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {/* Simulated light rays */}
    </div>
  );
};

export default LightRays;

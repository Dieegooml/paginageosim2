import React from 'react';

const LightCornerOverlay = ({
  className = '',
  intensity = 'medium', // 'low' | 'medium' | 'high'
  variant = 'internal', // 'home' | 'internal'
  safeZone = false,
}) => {
  const levels = {
    low: { top: 0.04, mid: 0.02 },
    medium: { top: 0.08, mid: 0.045 },
    high: { top: 0.14, mid: 0.08 },
  };

  const { top, mid } = levels[intensity] || levels.medium;

  const radialStyle = {
    backgroundImage: `radial-gradient(circle at 0% 0%, rgba(255,255,255,${top}) 0%, rgba(255,255,255,${mid}) 35%, transparent 70%)`,
  };

  const safeZoneStyle = {
    backgroundImage:
      'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)',
  };

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/8 via-transparent to-[#0B1F3A]/10" />
      <div className="absolute inset-0" style={radialStyle} />
      {safeZone && (
        <div
          className="absolute inset-y-0 left-0 w-[80%] sm:w-3/5 md:w-2/5 lg:w-1/3"
          style={safeZoneStyle}
        />
      )}
    </div>
  );
};

export default LightCornerOverlay;

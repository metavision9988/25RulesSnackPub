import React from 'react';

interface SeriesIconProps {
  series: 'snack' | 'soul';
  className?: string;
}

const SeriesIcon: React.FC<SeriesIconProps> = ({ series, className = '' }) => {
  const emoji = series === 'snack' ? '🍿' : '🌙';
  return (
    <span className={`inline-block ${className}`} role="img" aria-label={`${series} series icon`}>
      {emoji}
    </span>
  );
};

export default SeriesIcon;

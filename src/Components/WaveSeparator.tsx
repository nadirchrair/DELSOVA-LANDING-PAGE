import React from 'react';

interface WaveSeparatorProps {
  direction?: 'up' | 'down';
  backgroundColor?: string;
  waveColor?: string;
  className?: string;
  height?: 'sm' | 'md' | 'lg' | 'xl';
  flip?: boolean;
}

const WaveSeparator: React.FC<WaveSeparatorProps> = ({
  direction = 'up',
  backgroundColor = 'transparent',
  waveColor = '#f9fcf8',
  className = '',
  height = 'lg',
  flip = false
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24'
  };

  const wavePaths = {
    up: flip 
      ? "M0,32L48,42.7C96,53,192,75,288,90.7C384,107,480,117,576,112C672,107,768,85,864,74.7C960,64,1056,64,1152,74.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      : "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    down: flip
      ? "M0,0L48,5.3C96,11,192,21,288,42.7C384,64,480,96,576,117.3C672,139,768,149,864,138.7C960,128,1056,96,1152,85.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      : "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  };

  return (
    <div 
      className={`w-full overflow-hidden ${heightClasses[height]} ${className}`}
      style={{ backgroundColor }}
    >
      <svg
        className={`w-full h-full ${direction === 'down' ? 'rotate-180' : ''} ${flip ? 'scale-x-[-1]' : ''}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={wavePaths[direction]}
          fill={waveColor}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

// Variante avec dégradé
interface GradientWaveSeparatorProps extends Omit<WaveSeparatorProps, 'waveColor'> {
  gradientColors?: [string, string];
}

export const GradientWaveSeparator: React.FC<GradientWaveSeparatorProps> = ({
  direction = 'up',
  backgroundColor = 'transparent',
  gradientColors = ['#4186d8', '#964cb2'],
  className = '',
  height = 'lg',
  flip = false
}) => {
  const gradientId = `gradient-${direction}-${gradientColors.join('-')}`;
  
  const heightClasses = {
    sm: 'h-8 sm:h-12',
    md: 'h-12 sm:h-16',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24'
  };

  const wavePaths = {
    up: "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    down: "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  };

  return (
    <div 
      className={`w-full overflow-hidden ${heightClasses[height]} ${className}`}
      style={{ backgroundColor }}
    >
      <svg
        className={`w-full h-full ${direction === 'down' ? 'rotate-180' : ''} ${flip ? 'scale-x-[-1]' : ''}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: gradientColors[0], stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: gradientColors[1], stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path
          d={wavePaths[direction]}
          fill={`url(#${gradientId})`}
          fillOpacity="1"
        />
      </svg>
    </div>
  );
};

// Variante double vague
export const DoubleWaveSeparator: React.FC<WaveSeparatorProps> = (props) => {
  const { direction = 'up', waveColor = '#f9fcf8', className = '', height = 'lg' } = props;
  
  const heightClasses = {
    sm: 'h-16 sm:h-24',
    md: 'h-24 sm:h-32',
    lg: 'h-32 sm:h-40',
    xl: 'h-40 sm:h-48'
  };

  return (
    <div className={`w-full relative ${heightClasses[height]} ${className}`}>
      {/* Première vague */}
      <div className="absolute top-0 left-0 w-full h-1/2">
        <WaveSeparator
          direction={direction}
          waveColor={waveColor}
          height="sm"
          flip={false}
        />
      </div>
      
      {/* Deuxième vague */}
      <div className="absolute bottom-0 left-0 w-full h-1/2">
        <WaveSeparator
          direction={direction === 'up' ? 'down' : 'up'}
          waveColor={waveColor}
          height="sm"
          flip={true}
          backgroundColor="transparent"
        />
      </div>
    </div>
  );
};

// Composant de ligne simple avec effet de vague
export const SimpleWaveLine: React.FC<{
  color?: string;
  thickness?: 'thin' | 'medium' | 'thick';
  className?: string;
}> = ({
  color = '#4186d8',
  thickness = 'medium',
  className = ''
}) => {
  const thicknessClasses = {
    thin: 'h-1',
    medium: 'h-2',
    thick: 'h-3'
  };

  return (
    <div className={`w-full ${thicknessClasses[thickness]} ${className} relative`}>
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-30"
        style={{ backgroundColor: color }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,5 C20,0 40,10 60,5 C80,0 100,10 100,5 L100,10 L0,10 Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
};

// Variante avec pattern
export const PatternWaveSeparator: React.FC<{
  pattern?: 'dots' | 'lines' | 'squares';
  direction?: 'up' | 'down';
  baseColor?: string;
  patternColor?: string;
  className?: string;
}> = ({
  pattern = 'dots',
  direction = 'up',
  baseColor = '#f9fcf8',
  patternColor = '#4186d8',
  className = ''
}) => {
  
  const patternId = `pattern-${pattern}`;
  
  const wavePath = direction === 'up'
    ? "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    : "M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  const patterns = {
    dots: `<pattern id="${patternId}" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1" fill="${patternColor}" fill-opacity="0.3"/>
      <circle cx="7" cy="7" r="1" fill="${patternColor}" fill-opacity="0.3"/>
    </pattern>`,
    lines: `<pattern id="${patternId}" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <line x1="0" y1="5" x2="10" y2="5" stroke="${patternColor}" stroke-width="1" stroke-opacity="0.3"/>
      <line x1="5" y1="0" x2="5" y2="10" stroke="${patternColor}" stroke-width="1" stroke-opacity="0.3"/>
    </pattern>`,
    squares: `<pattern id="${patternId}" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
      <rect x="0" y="0" width="4" height="4" fill="${patternColor}" fill-opacity="0.2"/>
      <rect x="6" y="6" width="4" height="4" fill="${patternColor}" fill-opacity="0.2"/>
    </pattern>`
  };

  return (
    <div className={`w-full h-16 sm:h-20 overflow-hidden ${className}`}>
      <svg
        className={`w-full h-full ${direction === 'down' ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="patternGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: baseColor, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: baseColor, stopOpacity: 1 }} />
          </linearGradient>
          <g dangerouslySetInnerHTML={{ __html: patterns[pattern] }} />
        </defs>
        <path
          d={wavePath}
          fill={`url(#${patternId})`}
          fillOpacity="1"
        />
        <path
          d={wavePath}
          fill="url(#patternGradient)"
          fillOpacity="0.8"
        />
      </svg>
    </div>
  );
};

export default WaveSeparator;
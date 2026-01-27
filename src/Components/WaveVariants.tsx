import React from "react";

// ==================== VARIANTES DE VAGUES ====================

// 1. Vague douce et élégante
export const SoftWaveSeparator: React.FC<{
  direction?: "up" | "down";
  color?: string;
  className?: string;
  height?: "sm" | "md" | "lg";
}> = ({
  direction = "up",
  color = "#f9fcf8",
  className = "",
  height = "lg",
}) => {
  const heightClasses = {
    sm: "h-12 sm:h-16",
    md: "h-16 sm:h-20",
    lg: "h-20 sm:h-24",
  };

  const wavePath =
    "M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";

  return (
    <div
      className={`w-full overflow-hidden ${heightClasses[height]} ${className}`}
    >
      <svg
        className={`w-full h-full ${direction === "down" ? "rotate-180" : ""}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePath} fill={color} fillOpacity="1" />
      </svg>
    </div>
  );
};

// 2. Vague dynamique avec multiples courbes
export const DynamicWaveSeparator: React.FC<{
  direction?: "up" | "down";
  primaryColor?: string;
  secondaryColor?: string;
  className?: string;
  animated?: boolean;
}> = ({
  direction = "up",
  primaryColor = "#4186d8",
  secondaryColor = "#964cb2",
  className = "",
  animated = true,
}) => {
  const wavePath1 =
    "M0,160L60,170.7C120,181,240,203,360,192C480,181,600,139,720,138.7C840,139,960,181,1080,186.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";
  const wavePath2 =
    "M0,192L60,202.7C120,213,240,235,360,224C480,213,600,171,720,170.7C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";

  return (
    <div
      className={`w-full h-24 sm:h-32 relative overflow-hidden ${className}`}
    >
      <svg
        className={`w-full h-full absolute top-0 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={wavePath1}
          fill={primaryColor}
          fillOpacity="0.8"
          className={animated ? "animate-pulse-slow" : ""}
        />
      </svg>
      <svg
        className={`w-full h-full absolute top-2 left-0 ${
          direction === "down" ? "rotate-180" : ""
        } opacity-70`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePath2} fill={secondaryColor} fillOpacity="0.6" />
      </svg>
    </div>
  );
};

// 3. Vague technique - parfaite pour les sections technologiques
export const TechWaveSeparator: React.FC<{
  direction?: "up" | "down";
  color?: string;
  className?: string;
  pattern?: "circuits" | "dots" | "hexagons";
}> = ({
  direction = "up",
  color = "#0e1934",
  className = "",
  pattern = "circuits",
}) => {
  const wavePath =
    "M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  const patterns = {
    circuits: `<path d="M0,10 L20,10 M10,0 L10,20" stroke="${color}" stroke-width="1" stroke-opacity="0.2"/>
               <circle cx="5" cy="5" r="2" fill="${color}" fill-opacity="0.1"/>
               <circle cx="15" cy="15" r="2" fill="${color}" fill-opacity="0.1"/>`,
    dots: `<circle cx="3" cy="3" r="1" fill="${color}" fill-opacity="0.3"/>
           <circle cx="12" cy="8" r="1" fill="${color}" fill-opacity="0.3"/>
           <circle cx="18" cy="15" r="1" fill="${color}" fill-opacity="0.3"/>`,
    hexagons: `<polygon points="10,0 20,5 20,15 10,20 0,15 0,5" fill="${color}" fill-opacity="0.1" stroke="${color}" stroke-width="0.5" stroke-opacity="0.2"/>`,
  };

  const patternId = `tech-pattern-${pattern}`;

  return (
    <div
      className={`w-full h-20 sm:h-28 relative overflow-hidden ${className}`}
    >
      <svg
        className={`w-full h-full absolute top-0 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <g dangerouslySetInnerHTML={{ __html: patterns[pattern] }} />
          </pattern>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.3 }} />
            <stop
              offset="100%"
              style={{ stopColor: color, stopOpacity: 0.1 }}
            />
          </linearGradient>
        </defs>
        <path d={wavePath} fill={`url(#${patternId})`} />
        <path d={wavePath} fill="url(#techGradient)" />
      </svg>
    </div>
  );
};

// 4. Vague minimaliste avec points
export const DottedWaveSeparator: React.FC<{
  direction?: "up" | "down";
  primaryColor?: string;
  dotColor?: string;
  className?: string;
}> = ({
  direction = "up",
  primaryColor = "#f9fcf8",
  dotColor = "#4186d8",
  className = "",
}) => {
  const wavePath =
    "M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,138.7C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z";

  return (
    <div
      className={`w-full h-20 sm:h-28 relative overflow-hidden ${className}`}
    >
      <svg
        className={`w-full h-full absolute top-0 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotsPattern"
            x="0"
            y="0"
            width="15"
            height="15"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="7.5" cy="7.5" r="1" fill={dotColor} fillOpacity="0.5" />
          </pattern>
        </defs>
        <path d={wavePath} fill={primaryColor} />
        <path d={wavePath} fill="url(#dotsPattern)" fillOpacity="0.5" />
      </svg>
    </div>
  );
};

// 5. Vague asymétrique moderne
export const AsymmetricWaveSeparator: React.FC<{
  direction?: "left" | "right";
  color?: string;
  className?: string;
  intensity?: "low" | "medium" | "high";
}> = ({
  direction = "right",
  color = "#4186d8",
  className = "",
  intensity = "medium",
}) => {
  const intensityValues = {
    low: 30,
    medium: 60,
    high: 90,
  };

  const height = intensityValues[intensity];

  const wavePathLeft = `M0,${height}L80,${height - 10}C160,${height - 20},320,${
    height - 40
  },480,${height - 30}C640,${height - 20},800,${height},960,${
    height - 10
  }C1120,${height - 20},1280,${height - 40},1360,${height - 50}L1440,${
    height - 60
  }L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z`;

  const wavePathRight = `M0,${height - 60}L80,${height - 50}C160,${
    height - 40
  },320,${height - 20},480,${height - 10}C640,${height},800,${
    height - 20
  },960,${height - 30}C1120,${height - 40},1280,${height - 20},1360,${
    height - 10
  }L1440,${height}L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z`;

  const wavePath = direction === "right" ? wavePathRight : wavePathLeft;

  return (
    <div className={`w-full h-24 sm:h-32 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePath} fill={color} fillOpacity="1" />
      </svg>
    </div>
  );
};

// 6. Vague avec effet de profondeur (3D)
export const DeepWaveSeparator: React.FC<{
  direction?: "up" | "down";
  baseColor?: string;
  shadowColor?: string;
  highlightColor?: string;
  className?: string;
}> = ({
  direction = "up",
  baseColor = "#0e1934",
  shadowColor = "#1a2a4a",
  highlightColor = "#4186d8",
  className = "",
}) => {
  const mainWave =
    "M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  const shadowWave =
    "M0,160L48,165.3C96,171,192,181,288,176C384,171,480,149,576,144C672,139,768,149,864,154.7C960,160,1056,160,1152,149.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  const highlightWave =
    "M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,112C672,107,768,117,864,122.7C960,128,1056,128,1152,117.3C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

  return (
    <div
      className={`w-full h-28 sm:h-36 relative overflow-hidden ${className}`}
    >
      {/* Ombre */}
      <svg
        className={`w-full h-full absolute top-2 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={shadowWave} fill={shadowColor} fillOpacity="0.7" />
      </svg>

      {/* Vague principale */}
      <svg
        className={`w-full h-full absolute top-0 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={mainWave} fill={baseColor} fillOpacity="1" />
      </svg>

      {/* Reflet */}
      <svg
        className={`w-full h-full absolute top-1 left-0 ${
          direction === "down" ? "rotate-180" : ""
        } opacity-60`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={highlightWave} fill={highlightColor} fillOpacity="0.4" />
      </svg>
    </div>
  );
};

// 7. Vague pixelisée pour un effet digital
export const PixelWaveSeparator: React.FC<{
  direction?: "up" | "down";
  color?: string;
  pixelSize?: "small" | "medium" | "large";
  className?: string;
}> = ({
  direction = "up",
  color = "#4186d8",
  pixelSize = "medium",
  className = "",
}) => {
  const pixelSizes = {
    small: 5,
    medium: 8,
    large: 12,
  };

  const size = pixelSizes[pixelSize];

  const wavePath =
    "M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,117.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";

  return (
    <div
      className={`w-full h-20 sm:h-28 relative overflow-hidden ${className}`}
    >
      <svg
        className={`w-full h-full absolute top-0 left-0 ${
          direction === "down" ? "rotate-180" : ""
        }`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="pixelPattern"
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width={size}
              height={size}
              fill={color}
              fillOpacity="0.9"
            />
            <rect
              x={size / 2}
              y={size / 2}
              width={size / 2}
              height={size / 2}
              fill={color}
              fillOpacity="0.6"
            />
          </pattern>
        </defs>
        <path d={wavePath} fill="url(#pixelPattern)" />
      </svg>
    </div>
  );
};

// 8. Vague liquide avec effet de fluidité
export const LiquidWaveSeparator: React.FC<{
  direction?: "up" | "down";
  color?: string;
  animated?: boolean;
  className?: string;
}> = ({
  direction = "up",
  color = "#964cb2",
  animated = true,
  className = "",
}) => {
  const wavePaths = [
    "M0,160L60,165.3C120,171,240,181,360,176C480,171,600,149,720,138.7C840,128,960,128,1080,138.7C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
    "M0,192L60,186.7C120,181,240,171,360,165.3C480,160,600,160,720,165.3C840,171,960,181,1080,176C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
    "M0,128L60,133.3C120,139,240,149,360,144C480,139,600,117,720,112C840,107,960,117,1080,122.7C1200,128,1320,128,1380,128L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
  ];

  return (
    <div
      className={`w-full h-24 sm:h-32 relative overflow-hidden ${className}`}
    >
      {wavePaths.map((path, index) => (
        <svg
          key={index}
          className={`w-full h-full absolute top-0 left-0 ${
            direction === "down" ? "rotate-180" : ""
          } ${animated ? "animate-float" : ""}`}
          style={{
            animationDelay: `${index * 0.5}s`,
            opacity: 1 - index * 0.2,
          }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={path} fill={color} fillOpacity={0.8 - index * 0.2} />
        </svg>
      ))}
    </div>
  );
};

// ==================== COMPOSANT PRINCIPAL AVEC TOUTES LES VARIANTES ====================

type WaveVariant =
  | "soft"
  | "dynamic"
  | "tech"
  | "dotted"
  | "asymmetric"
  | "deep"
  | "pixel"
  | "liquid";

interface AdvancedWaveSeparatorProps {
  variant: WaveVariant;
  direction?: "up" | "down" | "left" | "right";
  colors?: {
    primary?: string;
    secondary?: string;
    tertiary?: string;
  };
  className?: string;
  animated?: boolean;
  height?: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
}

export const AdvancedWaveSeparator: React.FC<AdvancedWaveSeparatorProps> = ({
  variant,
  direction = "up",
  colors = {},
  className = "",
  animated = true,
  height = "lg",
  intensity = "medium",
}) => {
  const defaultColors = {
    primary: "#4186d8",
    secondary: "#964cb2",
    tertiary: "#f9fcf8",
  };

  const mergedColors = { ...defaultColors, ...colors };

  const components = {
    soft: (
      <SoftWaveSeparator
        direction={direction as "up" | "down"}
        color={mergedColors.tertiary}
        className={className}
        height={height}
      />
    ),
    dynamic: (
      <DynamicWaveSeparator
        direction={direction as "up" | "down"}
        primaryColor={mergedColors.primary}
        secondaryColor={mergedColors.secondary}
        className={className}
        animated={animated}
      />
    ),
    tech: (
      <TechWaveSeparator
        direction={direction as "up" | "down"}
        color={mergedColors.primary}
        className={className}
        pattern="circuits"
      />
    ),
    dotted: (
      <DottedWaveSeparator
        direction={direction as "up" | "down"}
        primaryColor={mergedColors.tertiary}
        dotColor={mergedColors.primary}
        className={className}
      />
    ),
    asymmetric: (
      <AsymmetricWaveSeparator
        direction={direction as "left" | "right"}
        color={mergedColors.primary}
        className={className}
        intensity={intensity}
      />
    ),
    deep: (
      <DeepWaveSeparator
        direction={direction as "up" | "down"}
        baseColor={mergedColors.primary}
        shadowColor={mergedColors.secondary}
        highlightColor={mergedColors.tertiary}
        className={className}
      />
    ),
    pixel: (
      <PixelWaveSeparator
        direction={direction as "up" | "down"}
        color={mergedColors.primary}
        className={className}
        pixelSize="medium"
      />
    ),
    liquid: (
      <LiquidWaveSeparator
        direction={direction as "up" | "down"}
        color={mergedColors.secondary}
        animated={animated}
        className={className}
      />
    ),
  };

  return components[variant] || components.soft;
};

// ==================== CSS POUR LES ANIMATIONS ====================

export const WaveAnimationsCSS = () => {
  const animationStyles = `
    @keyframes float {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    @keyframes pulse-slow {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.8;
      }
    }

    .animate-float {
      animation: float 3s ease-in-out infinite;
    }

    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `;

  return <style>{animationStyles}</style>;
};

// ==================== UTILISATION SIMPLIFIÉE ====================

/**
 * Exemples d'utilisation :
 *
 * 1. Vague douce simple :
 *    <SoftWaveSeparator direction="up" color="#f9fcf8" />
 *
 * 2. Vague dynamique avec animation :
 *    <DynamicWaveSeparator animated={true} />
 *
 * 3. Vague technique pour sections tech :
 *    <TechWaveSeparator color="#0e1934" pattern="circuits" />
 *
 * 4. Vague avec points :
 *    <DottedWaveSeparator primaryColor="#f9fcf8" dotColor="#4186d8" />
 *
 * 5. Vague asymétrique moderne :
 *    <AsymmetricWaveSeparator direction="right" intensity="high" />
 *
 * 6. Vague avec effet 3D :
 *    <DeepWaveSeparator direction="up" />
 *
 * 7. Vague pixelisée :
 *    <PixelWaveSeparator pixelSize="medium" />
 *
 * 8. Vague liquide avec animation :
 *    <LiquidWaveSeparator animated={true} color="#964cb2" />
 *
 * 9. Utilisation du composant avancé avec toutes les variantes :
 *    <AdvancedWaveSeparator
 *       variant="dynamic"
 *       direction="up"
 *       colors={{ primary: '#4186d8', secondary: '#964cb2' }}
 *       animated={true}
 *     />
 */

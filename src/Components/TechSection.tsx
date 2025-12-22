import React from "react";

export default function TechSection() {
  const technologies = [
    { name: "JavaScript", color: "#F7DF1E", bg: "#000" },
    { name: "Python", color: "#3776AB", bg: "#FFD43B" },
    { name: "Docker", color: "#2496ED", bg: "#fff" },
    { name: "React", color: "#61DAFB", bg: "#282c34" },
    { name: "Node.js", color: "#339933", bg: "#fff" },
    { name: "MongoDB", color: "#13AA52", bg: "#fff" },
    { name: "PostgreSQL", color: "#336791", bg: "#fff" },
    { name: "Git", color: "#F1502F", bg: "#fff" },
    { name: "AWS", color: "#FF9900", bg: "#232F3E" },
    { name: "Kubernetes", color: "#326CE5", bg: "#fff" },
  ];

  const radius = 200;

  const TechIcon = ({ name, color, bg }) => {
    const icons = {
      JavaScript: (
        <svg viewBox="0 0 100 100" className="w-14 h-14">
          <rect width="100" height="100" fill="#F7DF1E" />
          <text
            x="50"
            y="60"
            textAnchor="middle"
            fontSize="50"
            fontWeight="bold"
            fill="#000"
          >
            JS
          </text>
        </svg>
      ),
      Python: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="45" fill="#3776AB" />
          <circle cx="50" cy="50" r="40" fill="#FFD43B" />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="40"
            fontWeight="bold"
            fill="#3776AB"
          >
            P
          </text>
        </svg>
      ),
      Docker: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#2496ED">
            <rect x="15" y="30" width="15" height="15" />
            <rect x="35" y="30" width="15" height="15" />
            <rect x="55" y="30" width="15" height="15" />
            <rect x="75" y="30" width="15" height="15" />
            <rect x="25" y="50" width="15" height="15" />
            <rect x="45" y="50" width="15" height="15" />
            <rect x="65" y="50" width="15" height="15" />
          </g>
        </svg>
      ),
      React: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="8" fill="#61DAFB" />
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="12"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="12"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="12"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2"
            transform="rotate(120 50 50)"
          />
        </svg>
      ),
      "Node.js": (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#339933">
            <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" />
          </g>
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="35"
            fontWeight="bold"
            fill="#fff"
          >
            N
          </text>
        </svg>
      ),
      MongoDB: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#13AA52">
            <path d="M50 15 Q70 40 70 60 Q70 80 50 85 Q30 80 30 60 Q30 40 50 15" />
            <circle cx="50" cy="50" r="12" fill="#fff" />
          </g>
        </svg>
      ),
      PostgreSQL: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <circle cx="50" cy="50" r="40" fill="#336791" />
          <text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="30"
            fontWeight="bold"
            fill="#fff"
          >
            pg
          </text>
        </svg>
      ),
      Git: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#F1502F">
            <circle cx="50" cy="30" r="12" />
            <circle cx="70" cy="60" r="12" />
            <circle cx="30" cy="60" r="12" />
            <line
              x1="50"
              y1="42"
              x2="70"
              y2="48"
              stroke="#F1502F"
              strokeWidth="3"
            />
            <line
              x1="50"
              y1="42"
              x2="30"
              y2="48"
              stroke="#F1502F"
              strokeWidth="3"
            />
          </g>
        </svg>
      ),
      AWS: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#FF9900">
            <rect x="20" y="30" width="60" height="10" rx="2" />
            <rect x="20" y="50" width="60" height="10" rx="2" />
            <rect x="20" y="70" width="60" height="8" rx="2" />
          </g>
        </svg>
      ),
      Kubernetes: (
        <svg viewBox="0 0 100 100" className="w-8 h-8">
          <g fill="#326CE5">
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#326CE5"
              strokeWidth="2"
            />
            <circle cx="50" cy="50" r="8" />
            <circle cx="50" cy="25" r="6" />
            <circle cx="72" cy="62" r="6" />
            <circle cx="28" cy="62" r="6" />
          </g>
        </svg>
      ),
    };

    return icons[name] || null;
  };

  return (
    <div className="w-full bg-white py-16 h-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600">
            Nous utilisons les meilleurs outils et frameworks pour développer
            des solutions innovantes
          </p>
        </div>

        {/* Circular Tech Stack */}
        <div className="flex justify-center items-center mb-12">
          <div
            className="relative w-full max-w-2xl"
            style={{ aspectRatio: "1 / 1", minHeight: "600px" }}
          >
            <svg
              className="w-full h-full absolute inset-0"
              viewBox="0 0 600 600"
            >
              {/* Orbital circles */}
              <circle
                cx="300"
                cy="300"
                r="150"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
              <circle
                cx="300"
                cy="300"
                r="200"
                fill="none"
                stroke="#e0e7ff"
                strokeWidth="1"
                strokeDasharray="5,5"
              />

              <defs>
                <linearGradient
                  id="centerGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              {/* Central circle and text */}
              <circle
                cx="300"
                cy="300"
                r="60"
                fill="url(#centerGradient)"
                opacity="0.15"
              />
              <text
                x="300"
                y="315"
                textAnchor="middle"
                fontSize="24"
                fontWeight="bold"
                fill="#1f2937"
              >
                TECH STACK
              </text>
            </svg>

            {/* Tech icons positioned in circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              {technologies.map((tech, index) => {
                const angle =
                  (index / technologies.length) * Math.PI * 2 - Math.PI / 2;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={tech.name}
                    className="absolute transition-all duration-300 hover:scale-125 cursor-pointer group"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      left: "50%",
                      top: "50%",
                    }}
                  >
                    <div
                      className="w-26 h-26 bg-white rounded-full flex items-center justify-center shadow-lg border-4 group-hover:shadow-2xl transition-shadow"
                      style={{ borderColor: tech.color }}
                    >
                      <TechIcon
                        name={tech.name}
                        color={tech.color}
                        bg={tech.bg}
                      />
                    </div>
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      {tech.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tech categories 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Frontend</h3>
            <p className="text-blue-700">
              React, JavaScript, et les derniers frameworks pour des interfaces
              modernes et réactives
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-bold text-purple-900 mb-3">Backend</h3>
            <p className="text-purple-700">
              Node.js, Python, et bases de données robustes pour des solutions
              évolutives
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border border-pink-200">
            <h3 className="text-lg font-bold text-pink-900 mb-3">DevOps</h3>
            <p className="text-pink-700">
              Docker, Kubernetes, AWS pour une déploiement sécurisé et
              performant
            </p>
          </div>
        </div>
*/}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiDocker,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiKubernetes,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";


interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export default function TechSection() {
  const [radius, setRadius] = useState(200);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setRadius(110);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setRadius(150);
        setIsMobile(false);
      } else {
        setRadius(200);
        setIsMobile(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const technologies: Technology[] = [
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Python", icon: <SiPython />, color: "#3776AB" },
    { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
    { name: "React", icon: <SiReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#13AA52" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
    { name: "Git", icon: <SiGit />, color: "#F1502F" },
{ name: "AWS", icon: <FaAws  />, color: "#FF9900" },
    { name: "Kubernetes", icon: <SiKubernetes />, color: "#326CE5" },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Nos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Nous utilisons les meilleurs outils pour créer des solutions modernes
          </p>
        </div>

        {/* 🔥 MOBILE GRID */}
        {isMobile ? (
          <div className="grid grid-cols-3 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div
                  className="text-3xl"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="text-xs mt-2 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ) : (
          /* 🔥 DESKTOP CIRCLE */
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-xl aspect-square">
              {/* Background circles */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 600 600"
              >
                <circle
                  cx="300"
                  cy="300"
                  r="150"
                  fill="none"
                  stroke="#e0e7ff"
                  strokeDasharray="5,5"
                />
                <circle
                  cx="300"
                  cy="300"
                  r="200"
                  fill="none"
                  stroke="#e0e7ff"
                  strokeDasharray="5,5"
                />

                <circle
                  cx="300"
                  cy="300"
                  r="60"
                  fill="url(#grad)"
                  opacity="0.2"
                />

                <defs>
                  <linearGradient id="grad">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>

                <text
                  x="300"
                  y="315"
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="bold"
                  fill="#1f2937"
                >
                  TECH STACK
                </text>
              </svg>

              {/* Icons */}
              <div className="absolute inset-0 flex items-center justify-center">
                {technologies.map((tech, index) => {
                  const angle =
                    (index / technologies.length) * Math.PI * 2 -
                    Math.PI / 2;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;

                  return (
                    <div
                      key={tech.name}
                      className="absolute group transition-all duration-300 md:hover:scale-125"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        left: "50%",
                        top: "50%",
                      }}
                    >
                      <div
                        className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4"
                        style={{ borderColor: tech.color }}
                      >
                        <div
                          className="text-xl sm:text-2xl md:text-3xl"
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </div>
                      </div>

                      {/* Tooltip */}
                      <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition">
                        {tech.name}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
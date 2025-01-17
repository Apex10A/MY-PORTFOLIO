import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import {
  Code2,
  Brain,
  Rocket,
  GanttChart,
  Coffee,
  Timer
} from 'lucide-react';

const useCountAnimation = (end, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);
    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};

const About = () => {
  const projectsCount = useCountAnimation(20, 1500);
  const experienceCount = useCountAnimation(4, 1500);
  const clientsCount = useCountAnimation(8, 1500);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    {
      name: "Frontend Development",
      level: 90,
      icon: <Code2 className="w-6 h-6" />,
      tools: ["React", "Next.js", "TypeScript"]
    },
    {
      name: "UI/UX Design",
      level: 85,
      icon: <Brain className="w-6 h-6" />,
      tools: ["Tailwind CSS", "Material-UI", "Styled Components"]
    },
    {
      name: "Backend Integration",
      level: 75,
      icon: <GanttChart className="w-6 h-6" />,
      tools: ["Firebase", "RESTful APIs", "Redux"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Crafting Digital <span className="text-yellow-400">Experiences</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              As a frontend virtuoso with {experienceCount}+ years of experience, I transform complex problems into elegant solutions. My passion lies in creating intuitive, performant, and visually stunning web applications that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300">
                Get in Touch
              </a>
              <a href="/resume.pdf" target="_blank" className="px-8 py-3 border-2 border-yellow-400 text-yellow-400 rounded-lg font-medium hover:bg-yellow-400 hover:text-black transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>
          
          <div className={`relative transform transition-all duration-700 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <img
              src='/Praise Afolabi.jpg'
              alt="Praise Afolabi"
              className="rounded-2xl w-full max-w-xl mx-auto shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: <Rocket className="w-8 h-8 mx-auto mb-4 text-yellow-400" />, count: projectsCount, label: "Projects Completed" },
            { icon: <Timer className="w-8 h-8 mx-auto mb-4 text-yellow-400" />, count: experienceCount, label: "Years Experience" },
            { icon: <Coffee className="w-8 h-8 mx-auto mb-4 text-yellow-400" />, count: clientsCount, label: "Happy Clients" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-800 p-6 rounded-xl text-center transform transition-all duration-300 hover:scale-105"
            >
              {stat.icon}
              <h3 className="text-4xl font-bold mb-2">{stat.count}+</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">My Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-gray-800 p-6 rounded-xl transform transition-all duration-500 opacity-0 translate-y-8 ${
                  isVisible ? 'opacity-100 translate-y-0' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-yellow-400 rounded-lg text-black mr-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.name}</h3>
                </div>
                <div className="mb-4">
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Section */}
        <div className={`text-center max-w-3xl mx-auto transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold mb-6">My Journey</h2>
          <p className="text-gray-300 mb-8">
            From crafting simple websites to building complex web applications, my journey has been driven by a passion for creating exceptional digital experiences. I constantly stay updated with the latest technologies and best practices to deliver cutting-edge solutions.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors duration-300"
          >
            View Full Resume
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
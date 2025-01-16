import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation';
import Mypic from './Mypic.jpeg';
import Skill from './Skill';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiRedux, SiFirebase } from 'react-icons/si';

const useCountAnimation = (end: number, duration: number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10); // Increment every 10ms
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
  const projectsCount = useCountAnimation(10, 1500); // Count to 10 in 1.5 seconds
  const experienceCount = useCountAnimation(2, 1500); // Count to 2 in 1.5 seconds
  const effectivenessCount = useCountAnimation(100, 1500); // Count to 100 in 1.5 seconds

  return (
    <div>
      <Navigation />
      <div id="About" className="h-screen lg:h-auto pb-20 pt-[200px] pr-16">
        <div className="lg:flex block justify-center">
          {/* About Me Section */}
          <div className="mx-auto w-full" id="about">
            <h1 className="text-3xl font-bold mb-2">Want to know about me?</h1>
            <hr className="w-10 rounded-lg mb-3 font-extrabold" />

            <div className="leading-8" id="langs">
              <p className="text-justify">
                Behind the screen, I'm a frontend magician, weaving spells of code and design. With expertise in
                <strong> Next.js</strong>, <strong>TypeScript</strong>, <strong>Redux</strong>, and <strong>Firebase</strong>, I create dynamic and scalable web applications.
              </p>
              <p className="text-justify pt-2">
                I believe in the power of delightful user experiences, where every pixel has a purpose and every interaction tells a story. Driven by curiosity and fueled by creativity, I constantly seek inspiration from the world around me, blending modern technologies to craft innovative solutions.
              </p>
              <p className="text-justify pt-2">
                Let’s embark on an adventure where innovation meets imagination. Together, we’ll create digital wonders that inspire and engage users.
              </p>
            </div>

            {/* Stats Section */}
            <div className="pt-10">
              <h2 className="text-3xl font-bold pb-2">Stats</h2>
              <hr className="w-10 rounded-lg mb-3 font-extrabold" />

              <div className="lg:flex grid sm:grid-cols-2 justify-center lg:gap-32 gap-20 pt-5">
                <div>
                  <h2 className="font-bold text-center text-5xl">{projectsCount}+</h2>
                  <p className="uppercase text-center lg:text-right pt-2 opacity-50">Personal Projects Completed</p>
                </div>
                <div>
                  <h2 className="font-bold text-center text-5xl">{experienceCount}+</h2>
                  <p className="uppercase text-center lg:text-right pt-2 opacity-50">Years of Experience</p>
                </div>
                <div>
                  <h2 className="font-bold text-center text-5xl">{effectivenessCount}%</h2>
                  <p className="uppercase text-center lg:text-right pt-2 opacity-50">Effectiveness</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="pt-10">
              <h2 className="text-3xl font-bold pb-2">Skills</h2>
              <hr className="w-10 rounded-lg mb-3 font-extrabold" />

              <div className="flex flex-wrap justify-center gap-10 pt-5">
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-6xl text-gray-800" />
                  <p className="pt-2 font-bold text-center">Next.js</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-6xl text-blue-500" />
                  <p className="pt-2 font-bold text-center">TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiRedux className="text-6xl text-purple-600" />
                  <p className="pt-2 font-bold text-center">Redux</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiFirebase className="text-6xl text-yellow-500" />
                  <p className="pt-2 font-bold text-center">Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                  <FaReact className="text-6xl text-blue-400" />
                  <p className="pt-2 font-bold text-center">React.js</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative left-7 lg:left-0 mt-10 lg:mt-0">
            <img
              src={Mypic}
              className="rounded-xl mx-auto lg:mx-0 w-[95%] lg:max-w-[650px] hover:brightness-75 transition duration-300"
              alt="My portrait"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

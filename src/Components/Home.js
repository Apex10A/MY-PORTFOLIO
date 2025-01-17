import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight">
              Hello, I'm <span className="text-yellow-400">Praise Afolabi</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-300">
              A frontend virtuoso, crafting visually stunning experiences. With HTML, CSS, and JavaScript, 
              I bring ideas to life. Let's collaborate and create digital magic that leaves a lasting impression!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Link to="/project">
                <button className="px-8 py-4 text-lg font-bold bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-all duration-300">
                  VIEW WORKS
                </button>
              </Link>
              <a href="#contact">
                <button className="px-8 py-4 text-lg font-bold border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300">
                  CONTACT ME
                </button>
              </a>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6 lg:w-1/2">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">4+</h3>
              <p className="text-gray-300 mt-2">Years Experience</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">20+</h3>
              <p className="text-gray-300 mt-2">Projects Completed</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">8+</h3>
              <p className="text-gray-300 mt-2">Happy Clients</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-yellow-400">3+</h3>
              <p className="text-gray-300 mt-2">Awards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'HTML5', 'CSS3'].map((tech) => (
            <div key={tech} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300">
              <p className="text-lg font-semibold">{tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links & Footer */}
      <div className="container mx-auto px-4 lg:px-8 pb-8">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/Apex10A" aria-label="GitHub" className="hover:transform hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
          <a href="https://x.com/dev_apexxr" aria-label="Twitter" className="hover:transform hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
          <a href="/temporarily/restricted" aria-label="LinkedIn" className="hover:transform hover:scale-110 transition-transform duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
        </div>
        <footer className="text-center text-gray-400 text-sm">
          <p>© 2024 Praise Afolabi. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
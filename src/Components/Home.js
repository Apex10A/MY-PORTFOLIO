import React from 'react';
import Mypic from './my-pic.jpg';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <Navigation />
      <div className="flex flex-col items-center justify-between px-6 lg:px-10 lg:pt-[250px] pt-20">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight">
            Hello, I'm <span className="text-yellow-400">Praise Afolabi</span>
          </h1>
          <p className="mt-6 lg:mt-8 text-lg lg:text-xl max-w-2xl mx-auto text-gray-300">
            A frontend virtuoso, crafting visually stunning experiences. With HTML, CSS, and JavaScript, I bring ideas to life. Let's collaborate and create digital magic that leaves a lasting impression!
          </p>
          <Link to="/project">
            <button
              type="button"
              className="mt-8 px-8 py-4 text-lg font-bold bg-yellow-400 text-black rounded-md max-w-[60%]hover:bg-transparent  hover:border-yellow-400 hover:text-black transition-all duration-300"
            >
              VIEW WORKS
            </button>
          </Link>
        </div>

  
      </div>
     <div className='relative bottom-0'>
        {/* Social Icons */}
        <div className="flex justify-center mt-16 space-x-8 ">
          <a href="https://github.com/Apex10A" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
          <a href="https://x.com/dev_apexxr" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
          <a href="/temporarily/restricted" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-yellow-400 transition-colors duration-300" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-400 text-sm">
          <p>© 2023 Praise Afolabi. All Rights Reserved.</p>
        </footer>
     </div>
    </div>
  );
};

export default Home;

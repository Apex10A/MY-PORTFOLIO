import React from 'react';
import movie from './movie.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Piggy = () => {
  return (
    <div className="pt-7">
      <div className="lg:flex block items-center mx-auto justify-between gap-10 w-[90%] lg:w-auto" id="back">
        {/* Image Section */}
        <div>
          <img
            src={movie}
            alt="Movie streaming site screenshot"
            className="rounded-xl hover:opacity-70 lg:max-w-[660px] w-full cursor-pointer duration-500 ease-in-out"
          />
        </div>

        {/* Project Details */}
        <div className="lg:ml-10">
          <h1 className="lg:text-3xl text-2xl font-extrabold pt-3 lg:pt-0 pb-3">
            Movie Streaming Site
          </h1>
          <p className="uppercase pb-3 font-bold text-xs md:text-sm">
            React + TailwindCSS + TMDB API
          </p>
          <p className="text-md lg:w-1/2">
            Unlock financial freedom at my Cloned Piggyvest Website. Save, invest, and plan for a brighter future with ease.
          </p>

          {/* Action Links */}
          <div className="flex gap-5 pt-5">
            {/* Live Link */}
            <a
              href="https://hng-react-app.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black rounded-xl py-3 px-8 font-bold hover:opacity-80"
              aria-label="View live movie streaming site"
            >
              <FontAwesomeIcon icon={faEye} className="pr-2" />
              <span>Live</span>
            </a>

            {/* Code Link */}
            <a
              href="https://github.com/Apex10A/HNG_react_project"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-white text-black rounded-xl py-3 px-8 font-bold hover:opacity-80"
              aria-label="View movie streaming site code"
            >
              <FontAwesomeIcon icon={faCodeFork} className="pr-2" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Piggy;

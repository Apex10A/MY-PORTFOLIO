import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';

const Navigation = () => {
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'WORKS', link: '/project' },
    { name: 'ABOUT ME', link: '/about' },
    { name: 'CONTACT ME', link: '/contact' },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 z-50 bg-white md:bg-transparent">
      <div className="flex items-center justify-between py-5 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <span className=" text-3xl mr-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <Link to="/" className="text-2xl font-bold text-black md:text-white">
            Dev_Apex
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden text-black md:text-white"
          aria-label="Toggle navigation"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center absolute md:static bg-white md:bg-transparent w-full md:w-auto transition-all duration-500 ease-in-out ${
            open ? 'top-16 left-0' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="text-black md:text-white font-medium text-lg md:ml-8 md:my-0 my-6 hover:text-gray-400"
            >
              <Link to={link.link} onClick={() => setOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li className="md:ml-8">
            <Button>
              <a href="/Praise Afolabi.pdf" download>
                Download CV
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;

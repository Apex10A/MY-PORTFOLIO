import React from 'react'
import Mypic from './my-pic.jpg'
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {  } from '@heroicons/react/solid';
import Hello from './Hellos.gif'
import Planet from './planet.gif'
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className=''>
      <Navigation />
        <div className='text-white px-10 lg:pt-[250px] flex justify-center xl:pb-10 items-center ' id='height'>
            <div className='block items-center justify-center ' id='home-texter'>
            <div className='text-center block' >
            <h1 className='lg:text-7xl text-6xl lg:w-1/3 sm:w-2/3 mx-auto transform sm:pt-0 leading-28 block font-bold'>Hello, i'm <span className='font-extrabold'> Praise Afolabi</span></h1>
            <p className='lg:w-1/3 text-md lg:text-xl lg:leading-0 px-4 lg:px-0 leading-8 pt-5 mx-auto' id='para'>A frontend virtuoso, crafting visually stunning experiences. With HTML, CSS, and JavaScript, I bring ideas to life. Let's collaborate and create digital magic that leaves a lasting impression!</p>
            </div>
            {/* <div className='absolute top-10'>
              <img src={Hello} alt="" width='300px'/>
            </div>
            <div className='absolute right-0 bottom-10'>
              <img src={Planet} alt="" width='300px'/>
            </div> */}
            <div>
            <Link to='/project'>
            <div className=''>
            <button type='button' className='mx-auto relative z-[10] block mt-10 lg:mt-6 mb-10 font-extrabold text-lg sm:px-20 px-10 py-5 hover:bg-transparent hover:border hover:border-white hover:text-white rounded-full bg-white text-black transition-background-color duration-500 ease-in-out' id='btn'>View Works</button>
            </div>
            </Link>



                
            </div>

            <div className='lg:top-[50px] mt-32'>
            <div id='social' className='mx-auto justify-center gap-10 items-center flex '>
                <a href="https://github.com/Apex17751">
                <FontAwesomeIcon icon={faGithub} className='' id='github'/>
                </a>
                <a href="https://twitter.com/Afolabipraise3">
                <FontAwesomeIcon icon={faTwitter} className='' id='twitter'/>
                </a>
                <a href="/temporarily/restricted">
                <FontAwesomeIcon icon={faLinkedin} className='pointer' id='linkedin'/>
                </a>
            

        </div>
           <div className='flex items-center justify-center mt-6' id='opaque'>
            <p className='text-md  pb-3 lg:pb-0 lg:text-lg'>copyright©: All Rights Reserved 2023</p>
           </div>
            </div>
            </div>
        </div>
        
      
    </div>
  )
}

export default Home

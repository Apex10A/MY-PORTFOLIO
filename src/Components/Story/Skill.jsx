import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faBootstrap, faGit, faSquareJs } from '@fortawesome/free-brands-svg-icons';
import Navigation from '../Navigation';
import Tailwind from './Untitled (1).png'

const Skill = () => {
  return (
    <div className=' pt-20 lg:pt-14'>
        <div className='text-3xl pb-10 lg:pb-0 font-bold'>
                <h2>Skills</h2>
                <hr className='w-10 rounded-lg mb-3 font-extrabold'/>
            </div>
        <div className='flex items-center justify-center lg:pt-10'>
         <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-7 justify-center lg:gap-6' id='space'>
            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faReact} className='text-5xl' id='react'/>
            <h1 className='pt-2' id='react'>React</h1>
            </div>
            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faHtml5} className='text-5xl ' id='react'/>
            <h1 className='pt-2' id='react'>HTML</h1>
            </div>
            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faCss3} className='text-5xl' id='react'/>
            <h1 className='pt-2' id='react'>CSS</h1>
            </div>
            <div className=' opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out items-center' id='tail'>
              <img src={Tailwind} alt="" id='image' className='' />
              <h1 className='' id='react'>Tailwind</h1>
            </div>
            
            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faBootstrap} className='text-5xl' id='react'/>
            <h1 className='pt-2' id='react'>Bootstrap</h1>
            </div>

            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faSquareJs} className='text-5xl' id='react'/>
            <h1 className='pt-2' id='react'>Javascript</h1>
            </div>

            <div className='opacity-[0.5] hover:opacity-[0.9] cursor-pointer duration-500 ease-in-out'>
            <FontAwesomeIcon icon={faGit} className='text-5xl' id='react'/>
            <h1 className='pt-2' id='react'>Git</h1>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Skill

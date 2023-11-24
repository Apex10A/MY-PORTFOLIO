import React from 'react'
import Piggy from './Piggy'
import Rest from './Screenshot (12).png'
import Sophia from './Sophia'
import Todo from './Todo'
import Weather from './Weather'
import University from './University' 
import Metaverse from './Metaverse'
import Navigation from '../Navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';
import ProjectFirst from './ProjectFirst'
import Movies from './Movies'

const Project = () => {
  return (
    <div>
      <Navigation />
      <div className='lg:pt-[140px]' id='project'>
      <div className='pb-10'>
        <ProjectFirst/>
      </div>

      <div>
        <Movies/>
      </div>
          <div className='justify-center items-center flex pt-10 pb-20'>
          
        <div className='block'>
       
        <div>
        <div className='block lg:flex items-center mx-auto justify-between w-[90%] lg:w-auto' id='back' >

        <div>
            <img src={Rest} alt="" id='rest' className='rounded-xl lg:w-auto w-[100%] hover:opacity-[0.7] cursor-pointer duration-500 ease-in-out '/>
        </div>

        <div className='lg:ml-10 '>
            <h1 className='lg:text-3xl text-2xl font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-3 lg:pb-3'>Restaurant Website</h1>
            <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>React + Tailwind </p>

            <h3 className='md:text-md text-sm lg:w-1/2 ' id='opaques'>Experience culinary perfection at FOODS. Discover delectable flavors, elegant ambiance, and impeccable service. Indulge your senses today.</h3>

            <div className='flex gap-5 pt-8'>
              <div className='flex justify-center items-center' id='code'>
                <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
                <a href="https://resturantwebsitez.netlify.app/" target='_blank' className='flex  text-black  text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faEye} className='mx-auto pr-2 block' />
              <p className='text-sm md:text-m'>Live</p>
              </a>
                  
                </div>

              </div>
              <div className='flex justify-center items-center' id='code'>
             <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
             <a href="https://github.com/Apex17751/my-resturant-website" target='_blank' className='flex text-black text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faCodeFork}  className='mx-auto pr-2 block'/>
              <p className='text-sm md:text-md '>Code</p>
              </a>
             </div>
              </div>

            </div>
        </div>

        </div>


        <Piggy />
        <Sophia />
        <Todo />
        <Weather />
        <University />
        <Metaverse />


        </div>
        </div>

      
    </div>
      </div>
    </div>

  )
}

export default Project

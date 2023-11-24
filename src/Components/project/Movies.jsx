import React from 'react'
import movie from './movie.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Piggy = () => {
  return (
    <div className='pt-7'>
        <div className='lg:flex block items-center mx-auto justify-between gap-32 w-[90%] lg:w-auto' id='back' >

<div>
    <img src={movie} alt="" className='rounded-xl hover:opacity-[0.7] lg:max-w-[660px] w-[100%]cursor-pointer duration-500 ease-in-out '/>
</div>

<div className='lg:ml relative left-0 '>
    <h1 className='lg:text-3xl text-2xl font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-3 lg:pb-3'>Movie streaming site</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm'>React + TailwindCSS + TMDB API</p>

    <h3 className='text-md lg:w-1/2' id='opaques'>Unlock financial freedom at my Cloned Piggyvest Website Save, invest, and plan for a brighter future with ease.</h3>

    <div className='flex gap-10 pt-5'>
    <div className='flex justify-center items-center' id='code'>
              <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
              <a href="https://hng-react-app.web.app/" target='_blank' className='flex  text-black  text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faEye}   className='mx-auto pr-2 block'/>
              <p className='text-sm md:text-m'>Live</p>
              </a>
              </div>

              </div>
              
              <div className='flex justify-center items-center' id='code'>
             <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
             <a href="https://github.com/Apex10A/HNG_react_project" target='_blank' className='flex text-black text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faCodeFork} className='mx-auto pr-2 block' />
              <p className='text-sm md:text-md'>Code</p>
              </a>
             </div>
              </div>

            </div>
</div>

</div>
      
    </div>
  )
}

export default Piggy

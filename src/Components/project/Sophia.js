import React from 'react'
import Sophie from './Screenshot (2).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Sophia = () => {
  return (
    <div className='pt-7'>
        <div className='lg:flex mx-auto block items-center gap-32 justify-between w-[90%] lg:w-auto' id='back' >

<div>
    <img src={Sophie} alt="" id=''  className='rounded-xl hover:opacity-[0.7] lg:max-w-[650px] cursor-pointer duration-500 ease-in-out '/>
</div>
<div className='relative'>
    <h1 className='lg:text-3xl text-2xl font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-3 lg:pb-3'>Sophia Website</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>React + MUI</p>

    <h3 className='text-sm lg:w-1/2' id='opaques'>Instant airtime top-ups made easy. Experience the convenience of instant airtime refills anytime, anywhere. Discover a new level of convenience and stay connected with Sophia.</h3>

    <div className='flex gap-10 pt-5'>
              <div className='flex justify-center items-center' id='code'>
              <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
              <a href="https://sophiabotzz.netlify.app/" target='_blank' className='flex  text-black  text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faEye}   className='mx-auto pr-2 block'/>
              <p className='text-sm md:text-m'>Live</p>
              </a>
              </div>

              </div>
              
              <div className='flex justify-center items-center' id='code'>
             <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
             <a href="https://github.com/Apex17751/my-resturant-website" target='_blank' className='flex text-black text-center mx-auto rounded-xl py-3 font-bold px-8'>
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

export default Sophia

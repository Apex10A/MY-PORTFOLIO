import React from 'react'
import Todos from './Screenshot (13).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
  return (
    <div className='pt-7'>
         <div className='lg:flex block items-center mx-auto gap-32 justify-between w-[90%] lg:w-auto' id='back' >

<div>
    <img src={Todos} alt="" className='rounded-xl hover:opacity-[0.7] lg:max-w-[650px] cursor-pointer duration-500 ease-in-out '/>
</div>

<div className='relative'>
    <h1 className='lg:text-3xl text-2xl font-extrabold lg:mr-5 pt-3 lg:pt-0 pb-3 lg:pb-3'>Todo-List Website</h1>
    <p className='uppercase lg:pb-4 pb-3 font-bold text-xs md:text-sm' id='lang'>React + Tailwind + JSON + API</p>

    <h3 className='text-sm lg:w-1/2' id='opaques'>Experience the power of a modern todo list app. This app streamlines task management. Effortlessly create, update, and track tasks in a clean and intuitive interface.</h3>

    <div className='flex gap-10 pt-5'>
              <div className='flex justify-center items-center' id='code'>
              <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
              <a href="https://my-todo-listz.netlify.app/" target='_blank' className='flex  text-black  text-center mx-auto rounded-xl py-3 font-bold px-8'>
              <FontAwesomeIcon icon={faEye}   className='mx-auto pr-2 block'/>
              <p className='text-sm md:text-m'>Live</p>
              </a>
              </div>

              </div>
              
              <div className='flex justify-center items-center' id='code'>
             <div className='flex bg-white justify-center items-center rounded-xl gap-5'>
             <a href="https://github.com/Apex17751/Todo-list" target='_blank' className='flex text-black text-center mx-auto rounded-xl py-3 font-bold px-8'>
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

export default Todo

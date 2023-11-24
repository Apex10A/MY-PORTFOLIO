import React from 'react'
import Resume from './praise cv.pdf'

const Button = (props) => {
  return (
    <a href={Resume} download>
        <button className='hidden lg:block lg:ml-8 font-extrabold text-lg px-20 py-5 uppercase hover:bg-transparent hover:border hover:border-white hover:text-white rounded-full bg-white text-black transition-background-color duration-500 ease-in-out'  id="btn" >
      {props.children}
    </button>
    </a>
  )
}
export default Button
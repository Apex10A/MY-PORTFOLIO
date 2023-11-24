import React from 'react'
import Loader from './animation_500_lijfd1r6.gif'

const PreLoader = () => {

  return (
    <div>
    <div className='h-screen items-center flex justify-center' id='heights'>
      <div className='block' >
        <img src={Loader} alt="" className='circle' />
        <div>
        <h1 className='text-md text-white text-center uppercase font-bold' id='dev'>LOADING...</h1>
        </div>
    </div>
    </div>
    </div>
  )
}

export default PreLoader

import React from 'react'
import Navigation from '../Navigation'
import Mypic from './Mypic.jpeg'
import Skill from './Skill'

const About = () => {
  return (
    <div className=''>
      <Navigation/>
          <div id='About' className=' h-screen lg:h-[100%] pb-20 pt-[200px]  pr-16'>
     
        <div className='lg:flex block justify-center'>
            <div className='mx-auto w-[100%]' id='about'>
                <h1 className='text-3xl font-bold mb-2'>Want to know about me?</h1>
                <hr className='w-10 rounded-lg mb-3 font-extrabold'/>

                <div className='leading-8 ' id='langs'>
                <p className='text-justify'>Behind the screen, I'm a frontend magician, weaving spells of code and design. With an alchemist's touch, I blend HTML, CSS, and JavaScript to create mesmerizing user interfaces. I believe in the power of delightful user experiences, where every pixel has a purpose and every interaction tells a story</p>
                <p className='text-justify'>Driven by curiosity and fueled by creativity, I constantly seek inspiration from the world around me. Whether it's the elegance of nature or the rhythm of music, I find ways to infuse beauty and harmony into my designs.I'm passionate about staying up-to-date with the latest technologies and techniques, always pushing the boundaries of
                   what's possible.
                </p>

                <p className='text-justify pt-2'> So, let's embark on an adventure together, where innovation meets imagination and pixels come to life. Together, we'll create digital wonders that engage, inspire, and enchant users. Are you ready to join me on this journey?</p>
                </div>

                <div className='pt-[40px]'>
                  <div>
                    <h2 className='text-3xl font-bold pb-2'>Stats</h2>
                    <hr className='w-10 rounded-lg mb-3 font-extrabold'/>
                  </div>
                  
                <div className='lg:flex grid sm:grid-cols-2 justify-center lg:gap-32 gap-20 pt-5'>
                  <div className=''>
                    <h2 className='font-bold text-center text-5xl'>10+</h2>
                    <p className='uppercase text-center lg:text-right pt-2 opacity-[0.5]'>Personal Projects completed</p>
                  </div>
                  <div>
                    <h2 className='font-bold text-center text-5xl'>2+</h2>
                    <p className='uppercase text-center lg:text-right pt-2 opacity-[0.5]'>Years of Experience</p>
                  </div>
                  <div>
                    <h2 className='font-bold text-center text-5xl'>100%</h2>
                    <p className='uppercase text-center lg:text-right pt-2 opacity-[0.5]'>Effectiveness</p>
                  </div>
                </div>
                <div>
              <Skill/>
            </div>
                </div>
            </div>
            <div className='relative left-7 lg:left-0 mt-10 lg:mt-0'>
              <img src={Mypic} className='rounded-xl mx-auto lg:mx-0 w-[95%] lg:max-w-[650px]' alt="" />
            </div>
        </div>
        
      
    </div>
    </div>

  )
}

export default About
import React, { useState } from 'react'
import Button from './Button.jsx';
import { Link } from 'react-router-dom';


const Navigation = () => {
    let Links =[
      {name:"HOME", link:"/"},
      {name:"WORKS",link:"/project"},
      {name:"ABOUT ME",link:"/about"},
      {name:"CONTACT ME",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 z-[99] left-0'>
      <div className='md:flex  items-center justify-between py-7 md:px-10 px-7' id='navi'>
      <div className='flex items-center '>
      <div className='font-bold  text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-white'>
        <span className='text-3xl text-red-600 mr-1 '>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <Link to='/'>
        <h2 className='pb-2' >Dev_Apex</h2>
        </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 text-white top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px] bg-transparent'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-bold lg:text-lg text-md md:my-0 my-7'>
              <a href={link.link} className='text-black  md:text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <Button >Download CV</Button>
        
    
      </ul>
      </div>
    </div>
  )
}

export default Navigation

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PreLoader from './PreLoader';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';
// import Resume from './myResume.pdf'


// // const Navigation = () => {
// //   // const menu = document.querySelector("#mobile-menu")
// //   // const menuLinks = document.querySelector("#nav-menu")

// //   // {menu = () => {
// //   //   me
// //   // }}
// //   const [loading, oyaLoading] = useState(true);
// //   const [navOpen, setNavOpen] = useState(false);

// //   const handleClick = () => {
// //     setNavOpen(!navOpen);
// //   };

// //   useEffect(() => {
// //     // Simulate some asynchronous task
// //     setTimeout(() => {
// //       oyaLoading(false); // Once the task is done, set loading to false
// //     }, 3000);
// //   }, []);

// //   const handleNavLinkClick = () => {
// //     setNavOpen(false); 
// //     oyaLoading(true); 
// //   };

// //   {/* download file */}
// //   const downloadFile = () => {
// //     window.location.href = "https://yoursite.com/src/assets/files/exampleDoc.pdf"
// //   }
// //   return (
// //     <div className='lg:h-[100%] mx-auto lg:bg-white'id="navi">
// //       <nav className='lg:block py-7 px-5 items-center justify-center sticky z-44 top-0 lg:w-auto w-[85%] mx-auto lg:mx-0' >
// //         <div className=' block lg:flex justify-between lg:gap-44 items-center z-1 '>
// //           <div className='flex items-center'>
// //           <div className='lg:ml-3 lg:mb-10'>
// //           <a href="" className='text-white text-3xl font-bold relative'>Apex</a>
// //           </div>

// //           <div className='navbar_toggle' id='mobile_menu'>
// //             <span className='bar'></span>
// //             <span className='bar'></span>
// //             <span className='bar'></span>
// //           </div>

// //           </div>
// //           <div className=' ml-3  '>
// //           <ul className=' block lg:flex gap-24 lg:leading-10 items-center transition-background-color duration-500 pb-10  ease-in-out  z-[1px]' id='nav-menu'>
// //             <li>
// //               <a href="" className='text-white lg:text-xl text-lg hover:opacity-[0.5] transition-background-color duration-500 ease-in-out'>Home</a>
// //             </li>
// //             <li>
// //               <a href="" className='text-white lg:text-xl text-lg hover:opacity-[0.5] transition-background-color duration-500 ease-in-out'>Works</a>
// //             </li>
// //             <li>
// //               <a href="" className='text-white lg:text-xl text-lg hover:opacity-[0.5] transition-background-color duration-500 ease-in-out'>About me</a>
// //             </li>
// //             <li>
// //               <a href="" className='text-white lg:text-xl text-lg hover:opacity-[0.5] transition-background-color duration-500 ease-in-out'>Contact me</a>
// //             </li>     
// //              <a href={Resume} download>
// //          <button type="button" className=' block font-extrabold text-lg px-20 py-5 hover:bg-transparent hover:border hover:border-white hover:text-white rounded-full bg-white text-black transition-background-color duration-500 ease-in-out'  id="btn">
// //      Download cv         </button>
// //                </a>

// //           </ul>
// //           </div>
// //         </div>

// //       </nav>
// //     </div>
// // //     <nav className='sticky flex justify-center items-center '>
// // //       {loading ? (
// // //         <PreLoader />
// // //       ) : (
// // //         <div>
          
// // //                   <div className="pt-14 pb-14 md:h-20 pr-10 pl-10 md:pr-0 md:pl-0 md:items-center md:flex md:justify-center relative " id="navi">
          
// // //           <div onClick={handleClick}>
// // //             {navOpen ? (
// // //               <XIcon className="block md:hidden absolute right-10 w-10 font-bold text-white" />
// // //             ) : (
// // //               <MenuIcon className="block md:hidden absolute right-10 w-10 font-extrabold text-white" />
// // //             )}
// // //           </div>
// // //           <div className={`flex md:hidden absolute left-0 ${navOpen ? 'hidden' : ''}`} id="nav">
// // //   <h1 className="text-white text-xl font-bold">Apex.</h1>
// // // </div>


// // //           <ul className={`md:flex text-white md:items-center text-left md:justify-center   transition-all duration-300  text-lg ${navOpen ? '' : 'hidden'}`} id="nav">
// // //             <div className='items-center flex justify-center'>
// // //             <li className="pb-3">
// // //               <Link to="/" onClick={handleNavLinkClick}>
// // //                 <a href="#" className="font-bold">
// // //                   Home
// // //                 </a>
// // //               </Link>
// // //             </li>
// // //             <hr className="md:hidden block pb-2" id="hrz" />
// // //             <li className="pb-3">
// // //               <Link to="/project" onClick={handleNavLinkClick}>
// // //                 <a href="#" className="font-bold">
// // //                   Projects
// // //                 </a>
// // //               </Link>
// // //             </li>
// // //             <hr className="md:hidden block pb-2" id="hrz" />
// // //             <li className="pb-3">
// // //               <Link to="/about" onClick={handleNavLinkClick}>
// // //                 <a href="#" className="font-bold">
// // //                   About me
// // //                 </a>
// // //               </Link>
// // //             </li>
// // //             <hr className="md:hidden block pb-2" id="hrz" />
// // //             <li className="pb-3">
// // //               <Link to="/contact">
// // //                 <a href="#" className="font-bold">
// // //                   Contact me
// // //                 </a>
// // //               </Link>
// // //             </li>
// // //             <hr className="md:hidden block pb-2" id="hrz" />
// // //             <div>
// // //               <a href={Resume} download>
// // //               <button type="button" className='mx-auto lg:ml-3 block font-extrabold text-lg px-20 py-5 hover:bg-transparent hover:border hover:border-white hover:text-white rounded-full bg-white text-black transition-background-color duration-500 ease-in-out'  id="btn">
// // //                 Download cv
// // //               </button>
// // //               </a>
// // //             </div>
// // //             </div>
// // //           </ul>
// // //         </div>
// // //         </div>

// // //       )}
// // //     </nav>
// //   );
// // };

// // export default Navigation;

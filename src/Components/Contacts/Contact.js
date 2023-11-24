import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Navigation from '../Navigation';
import emailjs from 'emailjs-com';



const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_849lg11', 'template_wdvzo2g', e.target, 'uqUpWBpfAw9BOXual')
      .then((result) => {
          console.log(result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Error sending email. Please try again.');
      });
      e.target.reset();
  };

  return (
    <div id='kontat'>
        <Navigation/>
        <div className='h-[100%] lg:h-[100vh]' id='contact'>
        <div  className='pt-32  pb-20'>
        <div>
            
        </div>

        <div className='lg:flex justify-evenly pt-20 items-center'>
        <div className='items-center block justify-center'>
        <div className='px-20'>
        <p className='sm:text-3xl md:text-4xl text-2xl font-bold'>Let's chat.</p>
        <p  className='sm:text-3xl md:text-4xl text-2xl font-bold'>Tell me about your project</p>
        <div>
            <p  className='sm:text-xl text-md font-medium pt-3'>Lets create something together</p>
        </div>
        <div className='mt-5 flex items-center' id='mailer'>
            <div className='mr-2' id='enve'>
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
           <div>
           <h1 className='sm:text-lg text-sm pl-3'> Mail me at:</h1>
            <p className=''> <a href="mailto:praizafolabi12@gmail.com"><ins className='text-sm pl-3 sm:text-lg'>pafolabi740@gmail.com</ins></a></p>
           </div>
        </div>
        </div>
        </div>

        <div className='items-center mx-auto lg:mx-0 justify-center flex mt-10 lg:mt-0' id='cont'>
            <div className="block ">
            <form action="" onSubmit={sendEmail} className='pt-10 pb-8' target="_blank" >
            <div className='mb-3'>
                <input type="text" name="name" id="name" placeholder='Name*' className='rounded-xl font-bold border-none outline-none px-4 py-4 ' required />
            </div>
            <div className='mb-3'>
                <input type="email" name="email" id="mail" placeholder='Email Address*' className='rounded-xl font-bold border-none outline-none px-4 py-4 mt-3' required />
            </div>
            <div className='mb-3 mt-4 pt-5'>
                <h1 className='mb-3 text-xl'>Tell us more about your project*</h1>
                <textarea name="message" id="messa" placeholder='message...' className='rounded-xl px-3 outline-none py-3 mb-3' cols="30" rows="7"></textarea>
            </div>
            <div>
                <input type="submit" value="Send Message" className='bg-red-700 mb-5 w-full py-4 cursor-pointer font-bold rounded-xl text-white px-3 text-xl mt-3 md:mt-0 hover:text-red hover:bg-white hover:text-red-700 duration-500 ease-in-out' />
            </div>
            </form>
            </div>
        </div>


        
        </div>


      
    </div>
        </div>
    </div>
  )
}

export default Contact

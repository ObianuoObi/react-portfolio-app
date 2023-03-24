import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsfillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>  
    <div className=''>
        .O.B.I.
        </div>
        
        {/*Menu*/}
        
            <ul className=' hidden md:flex'>
                <li> <a href="/">Home</a></li>
                <li> <a href="/contact">Contact</a></li>
            </ul>
        

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl "><a href="/">Home</a></li>
                <li className="py-6 text-4xl ">Skills</li>
                <li className="py-6 text-4xl ">Projects</li>
                <li className="py-6 text-4xl "><a href="/contact">Contact</a></li>
            </ul>
 
          {/* Social Icons */}   

          <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center '>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                <FaLinkedin size={20}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center  '>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                  <FaGithub size={20}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="/">
                   <FaFacebook size={20}/> 
                </a>
              </li>
        
            </ul>

          </div>

    </div>
  )
}

export default Navbar
import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaHandsHelping } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
import {BsfillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>  
    <div className=''>
        Obinna Obianuo
        </div>
        
        {/*Menu*/}
        
            <ul className=' hidden md:flex'>
                <li> <a href="/">Home</a></li>
                <li> <a href="/contact">Contact</a></li>
                <li> <a href="/projects">Projects</a></li>
            </ul>
        

        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


        {/* Mobile Menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl "><a href="/">Home</a></li>
                <li className="py-6 text-4xl "><a href="/contact">Contact</a></li>
                <li className="py-6 text-4xl "><a href="/projects">Projects</a></li>
            </ul>
 
          {/* Social Icons */}   

          <div className='flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center '>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/obinna-obianuo-2085a0215/">
                <FaLinkedin size={20}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center  '>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/ObianuoObi">
                  <FaGithub size={20}/> 
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="mailto:obianuoobinna@gmail.com">
                   <FaHandsHelping size={20}/> 
                </a>
              </li>
        
            </ul>

          </div>

    </div>
  )
}

export default Navbar
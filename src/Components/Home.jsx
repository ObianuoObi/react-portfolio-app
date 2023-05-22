import React from 'react'
import {Link} from 'react-router-dom'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] p-6'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-center text-white '>Hi, my name is</p>
            <h1 className='text-center text-4xl md:text-7xl font-bold text-white' >Obinna Obianuo,</h1>
            <h2 className='text-center text-4xl md:text-7xl font-bold text-white'> A Front End Web Developer</h2>
            <p className='text-center md:text-2xl text-white py-4 max-w-[900px]'>Building seamless digital experiences through code and creativity!</p>
            <div className='flex flex-col items-center'>
          <Link to='/Projects'>
                <button className=' text-white border-2 px-6 py-3  hover:bg-blue-600'> View work</button>
                </Link>
            </div>


        </div>
    </div>
  )
}

export default Home
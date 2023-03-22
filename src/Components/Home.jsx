import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] '>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-center text-white '>Hi, my name is</p>
            <h1 className='text-center text-4xl md:text-7xl font-bold text-white' >Obinna Obianuo</h1>
            <h2 className='text-center text-4xl md:text-7xl font-bold text-white'>A Front End Developer</h2>
            <p className='text-center text-white py-4 max-w-[700px]'>A Front End Develper for Start-ups and small business alike</p>
            <div className='flex flex-col items-center'>
                <button className=' text-white border-2 px-6 py-3  hover:bg-blue-600'> View work</button>
            </div>


        </div>
    </div>
  )
}

export default Home
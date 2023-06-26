import React from 'react'
import crypto from '../Assets/crypto.png'
import openai from '../Assets/openai.png'
import page from '../Assets/page.png'



const Projects = () => {
  return (
    <div name='projects' className='w-full py-6 h-screen text-gray-300 bg-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-blue-900 border-blue-900'>Projects</p>
        </div>

        <div
          className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-9'>

          <div style={{ backgroundImage: `url(${crypto})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

            <div className='opacity-0 group-hover:opacity-100'>

              <div className='pt-8 text-center'>
                <a href="https://crypto-app-nine-tan.vercel.app/">
                  <button className=' text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Demo</button>
                </a>
                <a href="https://github.com/ObianuoObi/crypto-app">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Code</button>
                </a>
              </div>

            </div>
          </div>
          <div style={{ backgroundImage: `url(${openai})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            <div className='opacity-0 group-hover:opacity-100'>

              <div className='pt-8 text-center'>
                <a href="https://openai-codex-omega.vercel.app/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Demo</button>
                </a>
                <a href="https://github.com/ObianuoObi/openai_codex">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Code</button>
                </a>
              </div>

            </div>
          </div>
          <div style={{ backgroundImage: `url(${page})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            <div className='opacity-0 group-hover:opacity-100'>

              <div className='pt-8 text-center'>
                <a href="https://obianuoobi.github.io/page-template/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Demo</button>
                </a>
                <a href="https://github.com/ObianuoObi/page-template">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-blue-900 text-white font-bold text-lg '>Code</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
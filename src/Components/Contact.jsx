import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method="POST" action= 'https://getform.io/f/d482189c-3863-4d75-97c6-fe679dae146a'  className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
            <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-white'>Contact</p> 
            </div>
            <input className="bg-white p-2" type="text" placeholder='Name' name="name"/>
            <input className="my-4 p-2 bg-white "type="email" placeholder='Email' name="name"/>
            <textarea className='bg-white p-2' name="message" rows="10"placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
            <div> <p className='text-2xl font-bold  text-white'>Contact: +4407818649590</p></div>
            <div> <p className='text-2xl font-bold  text-white'>Email: obianuoobinna@gmail.com</p></div>
        </form>
        
    </div>
     
  )
}

export default Contact
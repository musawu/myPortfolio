import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className='w-full bg-black text-white'>
        <div className='px-8 md:px-16 lg:px-24 py-2 flex justify-center md:justify-between items-center'>
          <div className='text-2xl font-bold hidden md:inline'>Syntiche</div>
          <div className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About Me</a>
            <a href="#services" className='hover:text-gray-400'>Services</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
            <a href="#contact" className='hover:text-gray-400'>Contact</a>
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
            Connect
          </button>
        </div>
      </div>
    </>
  )
}
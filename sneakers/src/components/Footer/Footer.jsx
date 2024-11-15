import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaArrowRightLong } from 'react-icons/fa6'
const Footer = () => {
  return (
    <footer className='bg-gray-800'>
      <div className=" max-w-7xl  mx-auto text-white grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className='flex flex-col gap-5'>
        <div className="flex">
          <img src={logo} alt="logo" className='w-8' />
          <p className='font-semibold text-xl'>SNEAKER</p>
        </div>
        <p>Lorem ipsum dolor sit amet Maiores at reprehenderit praesentium esse voluptatibus repellendus.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

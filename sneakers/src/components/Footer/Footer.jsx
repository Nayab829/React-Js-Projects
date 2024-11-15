import React from 'react'
import logo from '../../assets/logo.png'
import { FaArrowRightLong, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-gray-800 px-5'>
      <div className=" max-w-7xl  mx-auto text-white grid grid-cols-1 lg:grid-cols-3 gap-5 py-10">
        <div className='flex flex-col gap-5'>
        <div className="flex items-center">
          <img src={logo} alt="logo" className='w-8' />
          <p className='font-semibold text-xl'>SNEAKER</p>
        </div>
        <p className='text-gray-200'>Lorem ipsum dolor sit amet Maiores at reprehenderit praesentium esse voluptatibus repellendus.</p>
        </div>
        <div>
          <h3 className='font-semibold text-lg mb-5'>Quick Links</h3>
          <ul className='text-gray-200 flex flex-col gap-3 items-center md:items-start'>
            <li>
              <Link to='/' className='hover:text-red-500'>Home</Link>
            </li>
            <li>
              <Link to='/' className='hover:text-red-500'>Shop</Link>
            </li>
            <li>
              <Link to='/' className='hover:text-red-50 0'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-red-500'>Contact</Link>
            </li>
          </ul>
        </div>
        <div >
          <h3 className='font-semibold text-lg mb-5'>Follow us</h3>
          <div className='flex space-x-5 text-2xl cursor-pointer mb-9'>
            <FaFacebook className='hover:text-red-500'/>
            <FaInstagram className='hover:text-red-500'/>
            <FaGithub className='hover:text-red-500'/>
            <FaLinkedin className='hover:text-red-500'/>
          </div>
          <form >
            <input type="text" placeholder='Your email' className='p-2 bg-gray-700 outline-none 
            '  />
            <button className='bg-red-500 text-white p-2 -mr-8'>Subscribe</button>
          </form>
        </div>

      </div>
      <div className='border-t max-w-7xl mx-auto flex flex-col md:flex-row text-gray-200 p-6 '>
        <p className='flex-1'>&copy; 2024 Sneakers All rights reserved</p>
        <div>
          <span className='mr-3  font-medium'>Privacy policy</span>
          <span className='font-medium'>Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

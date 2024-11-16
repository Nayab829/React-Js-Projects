import React, { useState } from 'react'
import logo from '../../assets/logo.png'

import { PiShoppingCartLight, PiUserLight } from "react-icons/pi";

import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const activeClass = ({isActive})=>{
    return isActive ? "text-red-500" :"text-gray-700"
  }
  const [showMenu, setShowMenu] = useState(false)
  const products = useSelector(state => state.cart.products)
  return (
    <header className='w-full   shadow-md sticky top-0 left-0 right-0 bg-white z-10  px-2 '>
      <div className="w-full lg:max-w-7xl  md:mx-auto flex gap-12 py-3 md:py-6 justify-between">
        <div className=" flex items-center basis-3/12">
          <img src={logo} className='w-10' alt="logo" />
          <p className=' text-xl md:text-2xl font-bold'>SNEAKERS</p>
        </div>
        {/* //lg */}
        <ul className={`md:flex gap-10 hidden md:flex-row`}>
          <NavLink to="/" className={activeClass}><li className={` mx-3`}>Home</li></NavLink>
          <NavLink to="/shop" className={activeClass}><li className='text-lg'>Shop</li></NavLink>
          <NavLink to="/about" className={activeClass}><li className='text-lg'>About</li></NavLink>
          <NavLink to="/contact" className={activeClass}><li className='text-lg'>Contact</li></NavLink>
        </ul>
        <ul className={`flex flex-col gap-5 duration-500 transition-all w-full h-72  -z-10 md:hidden absolute  right-2 bg-white   pt-4 shadow-md rounded p-5 ${showMenu ? "top-24 opacity-100 ":"-top-96 opacity-0 w-0 h-0"}`}>
          <FaTimes className='absolute top-2 right-2 cursor-pointer md:hidden ' onClick={() => setShowMenu(false)} />
          <NavLink to="/" className='mx-3' onClick={() => setShowMenu(!showMenu)}> <li className='text-lg hover:text-red-500'>Home</li></NavLink>
          <NavLink to="/shop" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg hover:text-red-500'>Shop</li></NavLink>
          <NavLink to="/about" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg hover:text-red-500'>About</li></NavLink>
          <NavLink to="/contact" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg hover:text-red-500'>Contact</li></NavLink>
        </ul>

        <div className="flex  items-center justify-center  gap-4 md:gap-6 basis-1/4">
          <PiUserLight className='text-2xl md:text-3xl font-semibold' />
          <NavLink to="/cart" > <span className="relative "><PiShoppingCartLight onClick={()=> setShowMenu(false)} className='text-3xl font-semibold' />
            <span className=" flex items-center justify-center absolute  cursor-pointer -top-1 -right-1 bg-red-500 text-white w-4 h-4 rounded-2xl">
              {products.length > 0 ? products.length : 0}
            </span>
          </span></NavLink>
          <FaBars className='md:hidden hover:text-red-500 cursor-pointer' onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
    </header>
  )
}













export default Navbar

import React, { useState } from 'react'
import logo from '../../assets/logo.png'

import { PiShoppingCartLight, PiUserLight } from "react-icons/pi";

import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';

import { FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const products = useSelector(state => state.cart.products)
  return (
    <header className='shadow-md sticky top-0 left-0 bg-white z-10  px-3 '>
      <div className="w-full lg:max-w-7xl  mx-auto flex gap-12 py-6 justify-between">
        <div className=" flex items-center basis-3/12">
          <img src={logo} className='w-10' alt="logo" />
          <p className='text-2xl font-bold'>SNEAKERS</p>
        </div>
        {/* //lg */}
        <ul className={`md:flex gap-10 hidden md:flex-row`}>
          <NavLink to="/" className='mx-3'><li className='text-lg'>Home</li></NavLink>
          <NavLink to="/shop" className='mx-3'><li className='text-lg'>Shop</li></NavLink>
          <NavLink to="/about" className='mx-3'><li className='text-lg'>About</li></NavLink>
          <NavLink to="/contact" className='mx-3'><li className='text-lg'>Contact</li></NavLink>
        </ul>
        <ul className={`flex  basis-1/2 gap-10 flex-col bg-white absolute top-24 -right-full w-64 p-5 rounded shadow-md  ${showMenu ? "right-0" : "-right-full"}`}>
          <FaTimes className='absolute top-4 right-4 cursor-pointer md:hidden ' onClick={() => setShowMenu(!showMenu)} />
          <NavLink to="/" className='mx-3' onClick={() => setShowMenu(!showMenu)}> <li className='text-lg'>Home</li></NavLink>
          <NavLink to="/shop" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg'>Shop</li></NavLink>
          <NavLink to="/about" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg'>About</li></NavLink>
          <NavLink to="/contact" className='mx-3' onClick={() => setShowMenu(!showMenu)}><li className='text-lg'>Contact</li></NavLink>
        </ul>

        <div className="flex  items-center justify-center gap-6 basis-1/4">
          <PiUserLight className='text-3xl font-semibold' />
          <NavLink to="/cart" > <span className="relative "><PiShoppingCartLight className='text-3xl font-semibold' />
            <span className=" flex items-center justify-center absolute  cursor-pointer -top-1 -right-1 bg-red-500 text-white w-4 h-4 rounded-2xl">
              {products.length > 0 ? products.length : 0}
            </span>
          </span></NavLink>
          <FaBars className='md:hidden' onClick={() => setShowMenu(!showMenu)} />
        </div>
      </div>
    </header>
  )
}













export default Navbar

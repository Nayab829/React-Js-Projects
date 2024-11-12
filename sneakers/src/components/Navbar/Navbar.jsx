import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartLight, PiUser, PiUserBold, PiUserCheckBold, PiUserCircle, PiUserLight } from "react-icons/pi";
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { FaBars, FaRegUser, FaUser } from 'react-icons/fa6';
import { BiSolidUserAccount, BiUsb } from 'react-icons/bi';
import { TiUserAddOutline, TiUserOutline } from 'react-icons/ti';
import { AiOutlineUser } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu,setShowMenu]= useState(false)
  return (
    <header className='navbar'>
      <div className="container flex">
        <div className="nav-logo flex">
          <img src={logo} alt="logo" />
          <p>Sneakers</p>
        </div>
        <ul  className={`nav-items flex ${showMenu ? "active" : ""}`}>
          <FaTimes className='close-icon' onClick={()=> setShowMenu(!showMenu)}/>
          <NavLink to="/" className='nav-link'> <li >Home</li></NavLink>
          <NavLink to="/shop" className='nav-link'><li >Shop</li></NavLink>
          <NavLink to="/about" className='nav-link'><li >About</li></NavLink>
          
          <NavLink to="/contact" className='nav-link'><li >Contact</li></NavLink>


        </ul>
        <div className="cart-login">

       
          <PiUserLight className='icon'/>
          <span className="cart "><PiShoppingCartLight className='icon' />
            <span className="cart-count flex">0</span></span>
        <FaBars className='menu-icon' onClick={()=> setShowMenu(!showMenu)}/>







        </div>
      </div>
    </header>
  )
}

export default Navbar

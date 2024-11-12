import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaArrowRightLong } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
      <div className="footer-box flex">
      <div className="footer-left">
       <h1 className="footer-heading">Are You Interested?</h1>
        <a>Shoping Now   <FaArrowRightLong className='footer-icon'/>
        </a>
       </div>
       <div className="footer-right">
       <div className="nav-logo flex">
          <img src={logo} alt="logo" />
          <p>Sneakers</p>
        </div>
        <ul>
            <li>Shop</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
       </div>
      </div>
      <div className="copyright">
        Copyright Sneaker Shoes sales 2024-All rights reserverd.
      </div>
      </div>
    </div>
  )
}

export default Footer

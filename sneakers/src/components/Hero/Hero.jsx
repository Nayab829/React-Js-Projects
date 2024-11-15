import React from 'react'

import hero_bg from '../../assets/hero_bg.png'
import './Hero.css'
const Hero = () => {
    return (
        <main className='hero '>
            <div className="max-w-screen-xl mx-auto flex items-center w-full ">
                <div className="content">
                    <h1 className='hero-heading'>Sh <span className="stretch">o</span> es <br />Collect!</h1>
                    <p className="hero-para">
                        Explore our exclusive collection of sneakers designed for performance and style, perfect for every occasion and need.
                    </p>
                    <button className='hero-btn'>Shop Now</button>
                </div>
                <div className="hero-img">
                    <img src={hero_bg} alt="hero-img" />
                </div>
            </div>
        </main>
    )
}

export default Hero

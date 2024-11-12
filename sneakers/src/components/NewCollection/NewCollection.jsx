import React from 'react'
import './NewCollection.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import newp1 from '../../assets/p-1 (9).png'
import newp2 from '../../assets/p-1 (14).png'
const NewCollection = () => {
    return (
        <div className='new-collection container flex padding'>
            <div className="new-left">
                <div className="top flex">
                    <h2 className="section-heading">See Our New  <br />Collections</h2>
                    <div className="next-prew flex">
                        <FaArrowLeftLong className='arrow-icon left' />
                        <FaArrowRightLong className='arrow-icon' />

                    </div>
                </div>
                <div className="image-box">
                    <img src={newp1} alt="" />
                </div>
            </div>
            <div className="new-right">
                <div className="image-box">
                <img src={newp2} alt="" />
                </div>

                <p>Discover our new collections now! Experience fresh styles and designs, perfect foe updating your wardrobe with the latest trends.</p>
                <button>Buy Now</button>
            </div>
        </div>
    )
}

export default NewCollection

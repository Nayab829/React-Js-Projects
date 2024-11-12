import React from 'react'
import './BestSeller.css'
import Card from '../Card/Card.jsx'
import p1 from '../../assets/p-1 (1).png'

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { data } from '../../assets/bestSeller.js'
import { SecData } from '../../assets/bestSeller2.js'
import { PiShoppingCartLight } from 'react-icons/pi';
const BestSeller = () => {
    return (
        <div className='best-seller container padding'>
            <div className="top flex">
                <h2 className="section-heading">Best Seller</h2>
                <div className="next-prew flex">
                    <FaArrowLeftLong className='arrow-icon left' />
                    <FaArrowRightLong className='arrow-icon' />

                </div>
            </div>
            <div className='seller-box flex'>
                <div className="seller-left">
                    <div className="seller-left-top flex">
                        {data.map((curr) => {
                            return <Card key={curr.id} currProduct={curr} />
                        })}
                    </div>
                    <div className="seller-left-bottom flex">
                        {SecData.map((curr) => {
                            return <Card key={curr.id} currProduct={curr} />
                        })}
                    </div>
                </div>
                <div className="seller-right flex">
                    <div className="card">

                        <div className="card-img">
                            <img src={p1} alt="" />
                        </div>
                        <div className="card-content">
                            <h4 className='product-name'>
                                Jordan Sneakers
                            </h4>
                            <div className="rating-div flex">
                                <p className="rating"> ★★★★★</p>
                                <p className="review">(17.k) Reviews</p>
                            </div>
                            <div className="price-div flex">
                                <p className='price'>$900</p>
                                <p className='quantity'>Sold out 96%</p>
                                <div className="cart-icon">
                                    <PiShoppingCartLight className='icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default BestSeller

import React from 'react'
import './Card.css'
// import basket from '../../assets/basket_icon.png'
import { PiShoppingCartLight } from "react-icons/pi";
const Card = ({ currProduct }) => {
    return (
        
            <div className="card">

                <div className="card-img">
                    <img src={currProduct.image} alt="" />
                </div>
                <div className="card-content">
                    <h4 className='product-name'>
                        {currProduct.name}
                    </h4>
                    <div className="rating-div flex">
                        <p className="rating"> ★★★★☆</p>
                        <p className="review">({currProduct.review}) Reviews</p>
                    </div>
                    <div className="price-div flex">
                        <p className='price'>${currProduct.price}</p>
                        <p className='quantity'>Sold out {currProduct.quantity}%</p>
                        <div className="cart-icon">
                        <PiShoppingCartLight className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default Card

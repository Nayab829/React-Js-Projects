import React from 'react'
import './Card.css'
import { addToCart } from '../../redux/cartSlice';
import { PiShoppingCartLight } from "react-icons/pi";
import { useDispatch } from 'react-redux';
const Card = ({ currProduct }) => {
    const dispatch = useDispatch()
    const handleAddToCart=(e, item)=>{
        e.stopPropagation();
        e.preventDefault()
        dispatch(addToCart(item))
        // alert("Product Added successfully");

    }
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
                    <div className="cart-icon" onClick={(e)=> handleAddToCart(e,currProduct)}>
                        <PiShoppingCartLight className='icon' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card

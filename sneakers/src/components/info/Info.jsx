import React from 'react'
import './Info.css'
import { FaHeadset, FaLock, FaShippingFast, FaTag } from 'react-icons/fa'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { TbFlagDiscount } from 'react-icons/tb'

const Info = () => {
    const infoItems = [
        {
            icon: <FaShippingFast className='info-icon'/>,
            title: "Free Shipping",
            description: "Get your orders delivered with no extra cost",
        },
        {
            icon: <FaHeadset className='info-icon'/>,
            title: "Support 24/7",
            description: "We are here to assist you anytime",
        },
        {
            icon: <FaMoneyBill1Wave className='info-icon'/>,
            title: "100% Money Back",
            description: "Full refund if you are not satisfied",
        },
        {
            icon: <FaLock className="info-icon"/>,
            title: "Payment Secure",
            description: "Your payment information is secure with us",
        },
        {
            icon: <FaTag className="info-icon"/>,
            title: "Discount",
            description: "Enjoy the best prices on your products",
        },
    ]
    return (
        <section>
            <div className=" md:w-full px-2 lg:max-w-7xl flex gap-6 mx-auto flex-wrap justify-center h-2/4 mt-24">
                {infoItems.map((item, index) => {
                   return  <div className="info-card flex items-center" key={index}>
                        <span >{item.icon}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Info

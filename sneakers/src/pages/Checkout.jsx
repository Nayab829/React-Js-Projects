import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const [billingToggle, setBillingToggle] = useState(true)
    const [shippingToggle, setShippingToggle] = useState(false)
    const [paymentToggle, setPaymentToggle] = useState(false)
    const [paymentMethod, setPaymentMethod] = useState("cod")
    const cart = useSelector(state => state.cart)
    return (
        <div className='max-w-7xl md:mx-auto my-5 flex flex-col items-start justify-between md:flex-row p-4 '>
            {/* checkout */}
            <div className='md:w-2/3 w-full'>
                <h3 className="text-2xl font-semibold mb-7 mt-4">CHECKOUT</h3>
                {/* billing  */}
                <div className='border px-2 text-gray-700 mb-4'>
                    <div >
                        <div className={`flex items-center justify-between `}
                            onClick={() => setBillingToggle(!billingToggle)}

                        >
                            <h2 className='text-xl font-semibold  mb-4 mt-2'>Billing Information</h2>
                            {billingToggle ? <FaAngleUp /> : <FaAngleDown />}

                        </div>
                        {/* billing */}
                        <div className={billingToggle ? "" : "hidden"}>
                            <div className='mb-4'>
                                <label htmlFor="name"

                                >Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter name'
                                    name='name'
                                    className='w-full p-2 border'

                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    placeholder='Enter Email'
                                    name='email'
                                    className='w-full p-2 border'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="phone">Phone:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Phone #'
                                    name='phone'
                                    className='w-full p-2 border'
                                />
                            </div>
                        </div>


                    </div>
                </div>
                {/* shipping */}
                <div className='border px-2 text-gray-700 mb-4'>
                    <div >
                        <div className={`flex items-center justify-between `}
                            onClick={() => setShippingToggle(!shippingToggle)}

                        >
                            <h2 className='text-xl font-semibold  mb-4 mt-2'>Shipping Information</h2>
                            {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}

                        </div>
                        {/* billing */}
                        <div className={shippingToggle ? "" : "hidden"}>
                            <div className='mb-4'>
                                <label htmlFor="address"

                                >Address:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Address'
                                    name='address'
                                    className='w-full p-2 border'

                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    placeholder='Enter City Name'
                                    name='city'
                                    className='w-full p-2 border'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="zip">Zip Code:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Zip Code'
                                    name='zip'
                                    className='w-full p-2 border'
                                />
                            </div>
                        </div>


                    </div>
                </div>
                {/* payment */}
                <div className='border px-2 pb-1 mb-4 text-gray-700'>
                    <div className={`flex items-center justify-between `}
                        onClick={() => setPaymentToggle(!paymentToggle)}

                    >
                        <h2 className='text-xl font-semibold  mb-4 mt-2'>Payment Method</h2>
                        {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}

                    </div>
                    <div className={paymentToggle ? "" : "hidden"}>
                        <div className='mb-3'>
                            <input type="radio"
                                id='db'
                                name="payment"
                                checked={paymentMethod === "db"}
                                onChange={() => setPaymentMethod("db")} />
                            <label
                                className='ml-3'
                                htmlFor="db">Debit Card </label>
                        </div>
                        <div>
                            <input type="radio"
                                name="payment"
                                id='cod'
                                checked={paymentMethod === "cod"}
                                onChange={() => setPaymentMethod("cod")} />
                            <label
                                className='ml-3'
                                htmlFor="cod">Cash On Delievery </label>
                        </div>
                        {paymentMethod === "db" && (
                            <div className='bg-gray-100 p-3 text-gray-700'>
                                <h3 className='text-lg font-semibold my-4'>Debit Card Information</h3>
                                <div className='mb-3'>
                                    <label htmlFor="" className='mb-2 font-semibold block'>Card Number</label>
                                    <input type="text" placeholder='Enter Card Number'
                                        className='w-full px-2 py-3 border rounded' />
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor="" className='mb-2 font-semibold block'>Card Holder Name</label>
                                    <input type="text" placeholder='Enter Card Holder Name'
                                        className='w-full px-2 py-3 border rounded' />
                                </div>
                                <div className='flex space-x-3 items-center flex-col md:flex-row '>
                                    <div className='md:w-1/2'>
                                        <label htmlFor="" className='mb-2 font-semibold block '>Expire Date:</label>
                                        <input type="date" className='rounded border w-full px-2 py-3'
                                        />
                                    </div>
                                    <div className='md:w-1/2'>
                                        <label htmlFor="" className='mb-2 font-semibold block '>CVV:</label>
                                        <input type="text" className='rounded border w-full px-2 py-3' placeholder='CVV' />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
            <div className='md:w-[30%] w-full shadow-2xl rounded-lg  mt-14 p-2 md:p-4'>
                {/* summary */}
                <h3 className="text-lg font-semibold my-3">Order Summary</h3>

               <div className='border-b'>
               {cart.products.map((prod) => {
                    return <div key={prod.id} >
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-4 mb-9'>
                                <img src={prod.image} alt={prod.name}  className='w-24'/>
                                <div>
                                    <h4 className='font-bold text-sm mb-2'> {prod.name}</h4>
                                    <p className='text-gray-600 text-base'>${prod.price}x{prod.quantity}</p>
                                </div>
                            </div>
                            <div>
                                <p>${prod.total}</p>
                            </div>
                        </div>


                    </div>
                })}
               </div>
                <div className='flex items-center justify-between py-3'>
                    <span className='text-gray-600'>Total Price:</span>
                    <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className='bg-red-500 hover:bg-red-600 rounded w-full text-white p-2'>Place Order</button>
            </div>
        </div>
    )
}

export default Checkout

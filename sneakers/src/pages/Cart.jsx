import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import AddressModal from '../components/AddressModal'
import Modal from '../components/Modal'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address, setAddress] = useState("main street, 023")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div className='max-w-screen-xl mx-auto p-8 md:px-16 lg:px-24'>
      {cart.products.length > 0 ?
        <div className=''>
          <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
          <div className='flex flex-col md:flex-row  justify-between gap-7 mt-8 ' >
            <div className="md:w-2/3 w-full overflow-x-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 font-bold text-lg border-b pb-3">
                <p className="flex-1">Products</p>
                <div className="flex flex-1 justify-between text-center space-x-4">
                  <p className="w-20">Price</p>
                  <p className="w-20">Quantity</p>
                  <p className="w-20">SubTotal</p>
                  <p className="w-20">Remove</p>
                </div>
              </div>

              {/* Product Rows */}
              <div className="space-y-6">
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center border-b pb-4 space-x-4"
                  >
                    {/* Product Info */}
                    <div className="flex-1 flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 object-contain rounded border"
                      />
                      <h3 className="text-lg font-bold">{product.name}</h3>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 justify-between items-center text-center space-x-4">
                      {/* Price */}
                      <p className="w-20">${product.price}</p>

                      {/* Quantity Controls */}
                      <div className="w-20 flex items-center justify-center border rounded">
                        <button
                          className="text-xl px-2 font-bold border-r hover:bg-gray-200"
                          onClick={() => dispatch(decreaseQuantity(product.id))}
                        >
                          -
                        </button>
                        <p className="text-lg px-3">{product.quantity}</p>
                        <button
                          className="text-xl px-2 font-bold border-l hover:bg-gray-200"
                          onClick={() => dispatch(increaseQuantity(product.id))}
                        >
                          +
                        </button>
                      </div>

                      {/* Subtotal */}
                      <p className="w-20">${product.total}</p>

                      {/* Remove */}
                      <div
                        className="w-20 text-red-500 hover:text-red-800 cursor-pointer"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrashAlt />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='w-full md:w-1/3 border shadow-lg p-5 rounded sm:w-2/3  '>
              <h3 className='  mb-6'>Cart Total</h3>
              <div className='flex justify-between items-center'>
                <span className=' '>Total Items</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div>
                <p className=''>Shipping:</p>
                <p className='inline mr-2'>Shipping To:
                  <span className='text-sm font-bold ml-2'>{address}</span>
                  <button className='text-blue-500 text-sm hover:underline' onClick={() => setIsModalOpen(true)}>Change Address</button>
                </p>


              </div>
              <div className='flex justify-between items-center'>
                <span className='text-'>Total Price </span>
                <span>${cart.totalPrice}</span>

              </div>
              <button className='w-full py-2 bg-red-500 text-white md:py-3 mt-5 hover:bg-red-600'
                onClick={() => navigate('/checkout')}
              >Proceed to checkout</button>
            </div>
          </div>
          {isModalOpen ? <div>
            <Modal setIsModalOpen={setIsModalOpen} >
              <AddressModal setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
            </Modal>
          </div> : <></>}
        </div> :
        <div className='flex justify-center'>
          <img src="./emptyCart.jpg" alt="empty cart" className='h-96 w-auto' />
        </div>}
    </div>
  )
}

export default Cart

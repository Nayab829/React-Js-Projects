import React, { useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import AddressModal from '../components/AddressModal'
import Modal from '../components/Modal'

const Cart = () => {
  const cart = useSelector(state => state.cart)
  const [address, setAddress] = useState("main street, 023")
  const [isModalOpen,setIsModalOpen] = useState(false)
  
  return (
    <div className='max-w-screen-xl mx-auto p-8 md:px-16 lg:px-24'>
      {cart.products.length > 0 ?
        <div className=''>
          <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
          <div className='flex flex-col md:flex-row  justify-between gap-7 mt-8 ' >
            <div className='md:w-2/3 overflow-x-auto'>
              <div className='flex items-center justify-between mb-4 font-bold text-lg border-b'>
                <p>Products</p>
                <div className='flex space-x-8 '>
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>SubTotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => {
                  return <div key={product.id}
                    className='flex items-center p-4 border-b space-x-8'>
                    <div className='md:flex items-center '>
                      <img src={product.image} alt={product.name} className='h-16 w-16 object-contain rounded' />
                      <div className='flex-1 ml-4'>
                        <h3 className='text-lg font-bold'>{product.name}</h3>
                      </div>
                    </div>
                    <div className='flex items-center space-x-5'>
                      <p>
                        ${product.price}
                      </p>
                      <div className="flex items-center justify-center border">
                        <button className='text-xl px-2 border-r font-bold'>-</button>
                        <p className='text-xl px-2'>{product.quantity}</p>
                        <button className='text-xl px-2 border-l'>+</button>
                      </div>
                    </div>





                    <div>
                      ${product.total}
                    </div>
                    <div className='text-red-500 hover:text-red-800'>
                      <FaTrashAlt />
                    </div>
                  </div>
                })}
              </div>


            </div>
            <div className='w-full sm:w-4/5 border shadow-lg p-5 rounded md:w-2/6 '>
              <h3 className='  mb-6'>Cart Total</h3>
              <div className='flex justify-between items-center'>
                <span className=' '>Total Items</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div>
                <p className=''>Shipping:</p>
                <p className='inline mr-2'>Shipping To:
                <span className='text-sm font-bold ml-2'>{address}</span>
                <button className='text-blue-500 text-sm hover:underline' onClick={()=> setIsModalOpen(true)}>Change Address</button>
                </p>
                

              </div>
              <div className='flex justify-between items-center'>
                <span className='text-'>Total Price </span>
                <span>${cart.totalPrice}</span>

              </div>
              <button className='w-full py-2 bg-red-500 text-white md:py-3 mt-5 hover:bg-red-600'>Proceed to checkout</button>
            </div>
          </div>
         {isModalOpen ? <div>
          <Modal setIsModalOpen={setIsModalOpen} >
            <AddressModal setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
         </div> :<></>}
        </div> :
        <div className='flex justify-center'>
          <img src="./emptyCart.jpg" alt="empty cart" className='h-96 w-auto' />
        </div>}
    </div>
  )
}

export default Cart

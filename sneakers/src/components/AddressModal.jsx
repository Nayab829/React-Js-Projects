import React, { useState } from 'react'

const AddressModal = ({setAddress, setIsModalOpen}) => {
const [newAddress, setNewAddress] = useState("")
const closeModal =()=>{
    setAddress(newAddress)
    setIsModalOpen(false)
}
  return (
    <div className='w-96 p-6 shadow-md rounded-md bg-white'>
      <input 
      type="text" 
      placeholder='Enter Address..' 
     className='p-2 bg-gray-100 outline-none mb-5 w-full' 
     onChange={(e) => setNewAddress(e.target.value)}
     />
      <div className='flex justify-end gap-3'>
        <button className='text-white px-4 py-2 rounded bg-gray-400' onClick={()=> setIsModalOpen(false)}>Cancel</button>
        <button className='text-white px-4 py-2 rounded bg-red-500' onClick={()=> closeModal()}>Save Address</button>
      </div>
    </div>
  )
}

export default AddressModal

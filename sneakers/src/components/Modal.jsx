import React from 'react'

const Modal = ({children,setIsModalOpen}) => {
  return (
    <div className='w-full fixed inset-0 h-screen bg-gray-400  flex items-center justify-center'>
      <span
      className='absolute top-28 right-2 text-3xl text-white cursor-pointer '
       onClick={()=> setIsModalOpen(false)}>&times;</span>
      {children}
    </div>
  )
}

export default Modal

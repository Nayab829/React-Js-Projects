import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'


const Search = ({inputVal, handleInputChange}) => {

  return (
    <section className='mx-2 md:max-w-7xl md:mx-auto mt-6'>
      <div className=" flex items-center  justify-center">
       
          <input type="text " value={inputVal} placeholder='Search products here...'  className='bg-gray-100 p-3 outline-none md:w-2/4 w-[90%]' onChange={(e)=> handleInputChange(e)}/>
          <button className='bg-red-500 text-white px-3 py-3 text-2xl -ml-4 rounded'><CiSearch /></button>

       
      </div>
    </section>
  )
}

export default Search

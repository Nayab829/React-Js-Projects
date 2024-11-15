import React, { useState } from 'react'
// import './Search.css'
import { CiSearch } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa'


const Search = () => {

  return (
    <section className='max-w-7xl mx-auto mt-6'>
      <div className=" flex items-center  justify-center">
       
          <input type="text " placeholder='Search products here...'  className='bg-gray-100 p-3 outline-none w-2/4'/>
          <button className='bg-red-500 text-white px-3 py-3 text-2xl -ml-4 rounded'><CiSearch /></button>

       
      </div>
    </section>
  )
}

export default Search

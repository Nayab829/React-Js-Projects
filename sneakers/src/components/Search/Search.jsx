import React, { useState } from 'react'
import './Search.css'
import { CiSearch } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa'


const Search = () => {

  return (
    <section className='search'>
      <div className="container flex">
<button className='filter-btn'>Filters<FaFilter/></button>

        <div className="input-box">
          <input type="text " placeholder='Search products here...' />
          <button><CiSearch /></button>
        </div>
      </div>
    </section>
  )
}

export default Search

import React from 'react'
import './Trending_products.css'
import { data } from '../../assets/trennding_products'

import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from '../Card/Card'
const Trending_products = () => {
  return (
    <div className='trending-products container padding'>
      <div className="top flex">
        <h2 className='section-heading'>Trending products</h2>
        <div className="next-prew flex">
          <FaArrowLeftLong className='arrow-icon left' />
          <FaArrowRightLong className='arrow-icon' />

        </div>
      </div>
      <div className="cards-container flex">
        {data.map((currProduct) => {
          return <Card key={currProduct.id} currProduct={currProduct} />
        })}
      </div>
    </div>
  )
}

export default Trending_products

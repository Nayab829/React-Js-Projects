import React from 'react'
import '../pages/CSS/Shop.css'
import { products } from '../assets/shop.js'
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'


const Shop = () => {
 
  return (
    < section className='shop'>
      <Search />
      <div className="container flex">
      
      <div className="shop-cards flex">
        {products.map((currProd) => {
          return <Card key={currProd.id} currProduct={currProd} />
        })}
      </div>
      </div>
    </section>
  )
}

export default Shop

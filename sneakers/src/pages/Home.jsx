import React from 'react'
import Hero from '../components/Hero/Hero'
import Trending_products from '../components/Trending_products/Trending_products'
import NewCollection from '../components/NewCollection/NewCollection'
import BestSeller from '../components/BestSeller/BestSeller'
import Info from '../components/info/Info'
import { setProducts } from '../redux/productSlice'
import { useDispatch, useSelector } from 'react-redux'


const Home = () => {
    const dispatch = useDispatch()
    const products= useSelector(state => state.product)
    return (
        <div>
            
            <Hero />
            <Info/>
            <Trending_products product={products}/>
            <NewCollection />
            <BestSeller />
            
        </div>
    )
}

export default Home

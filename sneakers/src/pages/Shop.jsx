import React, { useEffect, useState } from 'react'
import '../pages/CSS/Shop.css'
import Search from '../components/Search/Search'
import Card from '../components/Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { data } from '../assets/shop'
import { setProducts } from '../redux/productSlice.jsx'

const Shop = () => {
  const [inputVal, setInputVal] = useState("")
  const [filtered, setFiltered] = useState([])
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)

  useEffect(() => {
    dispatch(setProducts(data))
  }, [dispatch])
  useEffect(() => {
    if (inputVal) {
      const filteredProducts = products.products.filter((prod) => prod.name.toLocaleLowerCase().indexOf(inputVal.toLocaleLowerCase()) != -1)
      setFiltered(filteredProducts);

    } else {
      setFiltered(products.products)
    }
  }, [inputVal, products.products])



  const handleInputChange = (event) => {
    setInputVal(event.target.value)
  }

  if (!products.products) return <h2> Loading....</h2>

  return (
    < section className='shop'>
      <Search handleInputChange={handleInputChange} inputVal={inputVal} />
      <div className="container flex">

        <div className="shop-cards flex">

          {filtered.length > 0 ? (
            filtered.map((currProd) => {
              return <Card key={currProd.id} currProduct={currProd} />
            })
          ) : (<p>No products to show</p>)
          }
        </div>
      </div>
    </section>
  )
}

export default Shop

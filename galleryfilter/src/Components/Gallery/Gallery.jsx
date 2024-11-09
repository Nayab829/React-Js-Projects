import React, { useState } from 'react'
import './Gallery.css'
import menuItems from '../../db/gallery'

import { FaCartShopping } from 'react-icons/fa6';
const Gallery = () => {
    const [items, setItems] = useState(menuItems);
    const filterItems = (categData) => {
        const filtered = menuItems.filter((currItem) => {
            return currItem.category === categData;
        })
        setItems(filtered);
    }
    return (
        <>
            <div className='gallery'>
                <header>
                    <h1 className='main-heading'>Order You Favourite Dish</h1>
                    <hr />
                    <div className="btns">
                        <button className="btn" onClick={() => setItems(menuItems)}>All</button>
                        <button className="btn" onClick={() => filterItems('breakfast')}>BreakFast</button>
                        <button className="btn" onClick={() => filterItems('lunch')}>Lunch</button>
                        <button className="btn" onClick={() => filterItems('dinner')}>Dinner</button>

                    </div>
                </header>
                <section className="box-container">
                    {
                        items.map((item) => {
                            const { id, image, category, description, name } = item;
                            return <div className="box" key={id}>
                                <img src={image} alt={name} />
                                <div className="contents">
                                    <h2>{name}</h2>
                                    <p className="desc">
                                        {description}
                                    </p>
                                    <span className='categ'>{category}</span>
                                    <button className="btn">Order<FaCartShopping/></button>
                                </div>
                            </div>
                        }
                        )}

                </section>
            </div>
        </>
    )
}

export default Gallery

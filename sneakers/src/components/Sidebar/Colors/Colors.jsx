import React from 'react'
import '../Sidebar.css'
const Colors = () => {
  return (
    <div>
       <h3 className='title'>Colors</h3>
       <div className="label-container">
       <label >
        <input type="radio" name="" id="" />
        <span className="checkmark"></span>All
       </label>
       <label >
        <span className="checkmark"></span>
        <input type="radio" name="" id="" />Blue
       </label>
       <label >
        <span className="checkmark"></span>
        <input type="radio" name="" id="" />Red
       </label>
       <label >
        <span className="checkmark"></span>
        <input type="radio" name="" id="" />Green
       </label>
       </div>
    </div>
  )
}

export default Colors

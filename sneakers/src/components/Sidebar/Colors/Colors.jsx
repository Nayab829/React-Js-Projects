import React from 'react'
import '../Sidebar.css'
const Colors = () => {
  return (
    <div>
       <h3 className='title'>Colors</h3>
       <div className="label-container">
       <label >
        <input type="radio" name="test1" id="" />
        <span className="checkmark"></span>All
       </label>
       <label >
        <input type="radio" name="test1" id="" />Blue
        <span className="checkmark"></span>
       </label>
       <label >
        <input type="radio" name="test1" id="" />Red
        <span className="checkmark"></span>
       </label>
       <label >
        <input type="radio" name="test1" id="" />Green
        <span className="checkmark"></span>
       </label>
       </div>
    </div>
  )
}

export default Colors

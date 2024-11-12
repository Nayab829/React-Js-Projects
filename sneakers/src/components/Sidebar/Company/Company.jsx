import React from 'react'
import '../Sidebar.css'
const Company = () => {
  return (
    <div>
       <h3 className='title'>Company</h3>
       <label >
        <span className="checkmark"></span>
        <input type="radio" name="" id="" />All
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
  )
}

export default Company

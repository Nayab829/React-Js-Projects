import React from 'react'
import '../Sidebar.css'
const Company = () => {
  return (
    <div>
      <h3 className='title'>Company</h3>
      <label >
        <input type="radio" name="test" id="" />All
        <span className="checkmark"></span>
      </label>
      <label >
        <input type="radio" name="test" id="" />Blue
        <span className="checkmark"></span>
      </label>
      <label >
        <input type="radio" name="test" id="" />Red
        <span className="checkmark"></span>
      </label>
      <label >
        <input type="radio" name="test" id="" />Green
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default Company

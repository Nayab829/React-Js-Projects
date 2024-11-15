import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    const handleBack =()=>{
        navigate(-1)
    }
  return (
    <div className='error'>
      
      <img src="./error.png" alt="" className='max-w-72'/>
    <div className="btns">
    <Link to="/"><button className='btn'>Back To Home</button></Link>
    <Link onClick={handleBack}><button  className='btn'>Go Back</button></Link>
    </div>
    </div>
  )
}

export default ErrorPage

import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div>
      <form className='bg-gray-200 py-8 px-5 rounded max-w-[400px] my-5 mx-auto flex flex-col gap-4'>
        <h2 className='text-center text-3xl font-semibold text-gray-700 '>Signup</h2>
        <div className='flex flex-col'>
          <label htmlFor="fname" className='text-gray-600 font-semibold tracking-wider '>Name:</label>
          <input type="text" placeholder='Enter name' name='fname' id='fname' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email" className='text-gray-600 font-semibold tracking-wider'>Email:</label>
          <input type="email" placeholder='Enter email' name='email' id='email' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password" className='text-gray-600 font-semibold tracking-wider '>Create Password:</label>
          <input type="password" placeholder='Create password' name='password' id='password' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="cpassword" className='text-gray-600 font-semibold tracking-wider '>Confirm Password:</label>
          <input type="password" placeholder='confirm password' name='cpassword' id='cpassword' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>
        <div>
          <input type="checkbox" name="" id="" className='mr-2 w-4 h-4' />
          <label className=''>I agree to the <a href="#" className='text-red-500 underline'>Terms and conditions</a></label>
        </div>
        <button className='bg-red-500 text-white px-6 py-2 rounded'>Signup</button>
        <div>
          <p className='text-gray-800 font-normal text-sm'>Already have an account ? <Link to='/login' className='text-red-500 underline'>Login</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Signup
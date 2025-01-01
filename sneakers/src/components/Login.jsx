import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <form className='bg-gray-200 py-8 px-5 rounded max-w-[400px] my-5 mx-auto flex flex-col gap-4'>
        <h2 className='text-center text-3xl font-semibold text-gray-700 '>Login</h2>
        <div className='flex flex-col'>
          <label htmlFor="email" className='text-gray-600 font-semibold tracking-wider'>Email:</label>
          <input type="email" placeholder='Enter email' name='email' id='email' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="password" className='text-gray-600 font-semibold tracking-wider '>Password:</label>
          <input type="password" placeholder='Enter password' name='password' id='password' className='px-2 py-2 rounded outline-none' autoComplete='off' />
        </div>

        <button className='bg-red-500 text-white px-6 py-2 rounded'>Login</button>
        <div>
          <p className='text-gray-800 font-normal text-sm'>Don't have an account ? <Link to='/signup' className='text-red-500 underline'>Signup</Link></p>
        </div>
      </form>
    </>
  )
}

export default Login
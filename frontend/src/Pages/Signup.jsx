import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='h-[98vh] flex items-center justify-center'>
      <div className='p-4 w-2/6 rounded bg-gray-800'>
        <div className='text-2xl font-semibold'>Signup</div>
        <input 
        type='username'
        placeholder='username'
        name='username'
        className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
        />
        <input 
        type='email'
        placeholder='email'
        name='xyz@example.com'
        required
        className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
        />
        <input 
        type='password'
        placeholder='password'
        name='password'
        className='bg-gray-700 px-3 py-2 my-3 w-full rounded'
        />
        <div className='w-full flex items-center justify-between'>
        <button className='bg-blue-400 text-xl font-semibold text-black px-2 py-1 rounded'>
            SignUp
        </button>
        <Link to="/login" className='text-gray-400 text-xs hover:text-gray-200'>Already having an account? Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup

import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
     <a href="/" className='flex items-center'>
        <img src='/logo.svg' alt='Logo' className='h-10 cursor-pointer' />
      </a>
      <div className='flex items-center space-x-4'>
        <p className='text-[2.2rem] font-bold mr-[500px]'>Travel Itinerary Website</p>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header

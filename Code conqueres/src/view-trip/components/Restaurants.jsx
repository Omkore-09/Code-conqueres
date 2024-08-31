import React from 'react'
import { Link } from 'react-router-dom'

const Restaurants = ({trip}) => {
  return (
    <div className='mt-16'>
      <div>
      <h2 className='font-bold text-3xl mt-5'> Restaurant Recomondation 🍛</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {trip?.tripData?.restaurants?.map((restaurants , idx)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query='+restaurants?.name+" ,"+ restaurants?.location} target='_blank' >
            <div className='hover:scale-105 transition-all cursor-pointer'> 
                <img src='/resto.jpg' alt="" className='rounded-xl'/>
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium text-center'> {restaurants?.name} </h2>
                    <h2 className='text-xs text-gray-500 text-center'>📍 {restaurants?.location} </h2>
                    <h2 className='text-sm text-center'> 💰{restaurants?.price} </h2>
                    <h2 className='text-sm text-center'> 🍱{restaurants?.special_dishes} </h2>
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Restaurants

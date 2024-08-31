import React from 'react'
import { Link } from 'react-router-dom'

const Hotels = ({trip}) => {
  return (
    <div className='mt-16'>
      <h2 className='font-bold text-3xl mt-5'> Hotel Reacommendation 🌇</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10'>
        {trip?.tripData?.hotels?.map((hotel , idx)=>(
            <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.name+" ,"+ hotel?.address} target='_blank' >
            <div className='hover:scale-105 transition-all cursor-pointer'> 
                <img src='/hotel.png' alt="" className='rounded-xl'/>
                <div className='my-2 flex flex-col gap-2'>
                    <h2 className='font-medium text-center'> {hotel?.name} </h2>
                    <h2 className='text-xs text-gray-500 text-center'>📍 {hotel?.address} </h2>
                    <h2 className='text-sm text-center'> 💰{hotel?.price} </h2>
                    <h2 className='text-sm text-center'> ⭐{hotel?.rating} stars</h2>
                </div>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Hotels

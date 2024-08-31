import { Button } from '@/components/ui/button'
import React from 'react'
import { IoIosSend } from "react-icons/io";

const InfoSection = ({trip}) => {
  return (
    <div>
      <img src='/img.webp' className='h-[340px] w-full object-cover rounded-xl'/>

      <div className='flex justify-between items-center'>
      <div className='flex flex-col my-5 gap-2'>
        <h2 className='font-bold text-2xl'> {trip?.userSelection?.location} </h2>
        <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-[1rem] md:text-md'> 🗓️ {trip?.userSelection?.noOfDays} Days  </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-[1rem] md:text-md'> 💰{trip?.userSelection?.budget} Budget  </h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-[1rem] md:text-md'> 👪 No of Travellers : {trip?.userSelection?.travelers}   </h2>
        </div>
      </div>
      <Button> <IoIosSend /> </Button>
      </div>
    </div>
  )
}

export default InfoSection

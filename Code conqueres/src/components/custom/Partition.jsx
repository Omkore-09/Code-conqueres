import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const features = [
    {
      icon: "📍", 
      title: "Get personalised ",
      t1:"recs with AI"
    },
    {
      icon: "❤️", 
      title: "Save hotels, ",
      t1:"restaurants, and more"
    },
    {
      icon: "🗺️",  
      title: "See your saves ",
      t1:"on your custom map"
    },
    {
      icon: "👥", 
      title: "Share and collab ",
      t1:"with your travel buds"
    },
  ];

const Partition = () => {
  return (
    
    <div className='flex flex-col'>
      <div>
      <h1 className='text-center font-extrabold text-[60px] mt-16 animate-fade-up font-trip-sans '>Personalise your travel <br />Planning with Trips</h1>

      <p className='text-xl text-gray-500 text-center animate-fade-up delay-100 mt-5'>
      Now there’s two ways to plan your trip—use AI or search on your own. Either way, <br /> you’ve got more than 8 million spots to discover, with over one billion traveller <br /> reviews and opinions to guide you.
      </p>
      </div>
      <div>

      </div>

      <div className="flex justify-center space-x-8 mt-14 animate-fadeIn">
      {features.map((feature, index) => (
        <div key={index} className="flex flex-col items-center animate-fadeIn delay-100">
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md animate-scaleUp">
            <span className="text-2xl">{feature.icon}</span> {/* Icon */}
          </div>
          <p className="mt-4 text-center text-[20px] text-gray-700 animate-fadeIn delay-100">
            {feature.title} <br />
            {feature.t1}
          </p>
        </div>
      ))}
    </div>


    <div className="flex flex-col md:flex-row gap-1 justify-evenly mt-20">
      {/* Left Section */}
      <div className="w-600">
        <div className="bg-purple-200 w-[600px] rounded-lg p-6 shadow-md flex flex-col items-center">
          <img
            src="/p2.png" 
            alt="AI Trip Builder"
            className="h-80 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 text-center">Start a trip in minutes with AI</h3>
          <p className="text-gray-700 mb-4 text-center">
            Answer four short questions and get personalised recs with AI, guided by traveller opinions.
          </p>

          <Link to={'/create-trip'}>
        <Button className='animate-fade-up delay-200 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'> Try AI trip builder</Button>
      </Link>
          
        </div>
      </div>

      {/* Right Section */}
      <div className="w-600">
        <div className="bg-green-100 w-[600px] rounded-lg p-6 shadow-md flex flex-col items-center">
          <img
            src="/p1.png" 
            alt="Build your trip from scratch"
            className="h-80 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-bold mb-2 text-center">Build your trip from scratch</h3>
          <p className="text-gray-700 mb-4 text-center">
            Browse top destinations, restaurants, and things to do and save your faves to your itinerary as you go.
          </p>

          
          
          <Link to={'/modal'}>
        <Button className='animate-fade-up delay-200 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700'> Do it yourself </Button>
      </Link>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Partition

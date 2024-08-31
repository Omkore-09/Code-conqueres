import React, { useState } from 'react'
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
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
        <Button className='animate-fade-up delay-200 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700'> Try AI trip builder✨</Button>
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
          <button
            onClick={toggleSidebar}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Do it yourself 🖆
          </button>
          
        
        </div>
      </div>
    </div>
    {isSidebarOpen && <Sidebar onClose={toggleSidebar} />}
    </div>
    
  )
}

const Sidebar = ({ onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
        <div className="w-[400px] bg-white h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
          <button className="text-black text-2xl font-bold" onClick={onClose}>
            &times;
          </button>
          <h2 className="text-2xl font-bold mb-4">Create a Trip</h2>
          <form>
            <label className="block text-lg font-semibold mb-1">Trip name</label>
            <input
              type="text"
              placeholder="e.g., Summer holiday in Greece"
              maxLength={80}
              className="w-full p-2 border rounded mb-4"
            />
            <label className="block text-lg font-semibold mb-1">Destination</label>
            <input
              type="text"
              placeholder="Where to?"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-between mt-8">
              <button
                type="button"
                className="text-gray-700 underline"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
              >
                Create trip
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default Partition

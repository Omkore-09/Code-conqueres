import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'>
      {/* Heading with Animation */}
      <h1
        className='font-extrabold text-[50px] text-center mt-16 animate-fade-up'
      >
        <span className='text-[#f56551]'> Discover Your Next Adventure with Us: </span> Personalized at Your Budget and Choice
      </h1>

      {/* Paragraph with Animation */}
      <p className='text-xl text-gray-500 text-center animate-fade-up delay-100'>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </p>

      {/* Button with Animation */}
      {/* <Link to={'/partition'}>
        <Button className='animate-fade-up delay-200'>Get Started, For Free</Button>
      </Link> */}
      {/* <Link to={'/create-trip'}>
        <Button className='animate-fade-up delay-200'>Get Started, For Free</Button>
      </Link> */}
      <Link to={'/weatherPred'}>
        <Button className='animate-fade-up delay-200'>Get Started, For Free</Button>
      </Link>

      <div>
      <img 
        src="/landing.png" 
        alt="Travel Adventure" 
        className='w-full h-auto object-cover animate-fade-up' // Animation class added
      />
      </div>
    </div>
  );
}

export default Hero;

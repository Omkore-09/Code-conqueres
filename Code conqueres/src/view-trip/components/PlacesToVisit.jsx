import React from 'react';

const PlacesToVisit = ({ trip }) => {
  const itinerary = trip.tripData?.itinerary || {};
  const itineraryDays = Object.keys(itinerary).sort(); // Sorting days in order (e.g., day1, day2, ...)
  const hotels = trip.tripData?.hotels || [];

  return (
    <div>
      <h2 className="font-bold text-lg mb-4">Places to Visit</h2>

      {/* Grid Layout for Itinerary Days */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {itineraryDays.map((day, idx) => {
          const dayDetails = itinerary[day];
          return (
            <div key={idx} className="border rounded-lg p-4 shadow-md">
              <h2 className="font-medium text-lg mb-2">{day.charAt(0).toUpperCase() + day.slice(1)}</h2>
              <img
                src="/img.webp"
                alt={dayDetails.place}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <p className="font-medium text-sm text-orange-600">{dayDetails.time}</p>
              <p className="mt-1">{dayDetails.details}</p>
              <p className="mt-1">Place: <span className="font-semibold">{dayDetails.place}</span></p>
              <p className="mt-1">Rating: {dayDetails.rating}⭐</p>
              <p className="mt-1">Ticket Pricing: {dayDetails.ticket_pricing}</p>
            </div>
          );
        })}
      </div>

      
    </div>
  );
};

export default PlacesToVisit;

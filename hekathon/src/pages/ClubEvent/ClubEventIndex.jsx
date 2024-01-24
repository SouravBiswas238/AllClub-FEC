import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';


const ClubEventIndex = () => {

    const id=useParams().id;

    console.log(id)
  // Demo array of events
  const clubEvents = [
    {
      id: 1,
      title: 'Annual Gala Night',
      date: '2024-03-15',
      location: 'Grand Ballroom',
      description: 'Join us for a night of celebration and entertainment.',
    },
    {
      id: 2,
      title: 'Tech Expo 2024',
      date: '2024-05-20',
      location: 'Convention Center',
      description: 'Explore the latest in technology at our annual Tech Expo.',
    },
    // Add more events as needed
  ];

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className='md:container mx-auto mt-8'>
      {/* Header for the page */}
      <h1 className='text-3xl font-bold mb-4'>Club Events</h1>

      {/* Display events */}
      <div className='grid gap-4'>
        {clubEvents.map((event) => (
          <div key={event.id} className='bg-white p-4 rounded-md shadow-md'>
            <h2 className='text-xl font-bold mb-2'>{event.title}</h2>
            <p className='text-gray-500 mb-2'>
              Date: {formatDate(event.date)} | Location: {event.location}
            </p>
            <p className='text-gray-700'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubEventIndex;

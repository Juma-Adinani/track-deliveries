import React from 'react'
import HomePage from './HomePage';
import TrackDelivery from './trips/track-delivery';

function Home() {
  return (
    <div className='w-full bg-white'>
      <TrackDelivery />
    </div>
  );
}

export default Home
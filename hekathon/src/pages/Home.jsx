import React from 'react';
import NavbarIndex from './Navbar/NavbarIndex';

export const Home = () => {
  const containerStyle = {
    backgroundImage: 'url("https://i.ibb.co/gyGhPjf/4562472-1.png")',
    backgroundSize: 'cover', // You can adjust these properties as needed
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    width: '100%'
    
  };

  return (
    <div className='px-10' style={containerStyle}>
      <div className='pt-20 ps-10 md:text-6xl text-4xl  font-bold md:tracking-[.25em] tracking-[.15em]'>
        <h1  className='text-white mb-10 uppercase'> CLUBS sphere FEC </h1>
        <h1  className='text-white uppercase '>All Clubs STUDENT BRANCH</h1>
        {/* <img src="https://i.ibb.co/gyGhPjf/4562472-1.png" alt="4562472-1" border="0" /> */}
      </div>
      <div className='text-white text-4xl mt-20 ps-10'>
        <h1 className='tracking-[.25em] md:flex hidden'>  {'['} Advancing the Technologies {']'} </h1>
        <h1 className='tracking-[.25em] md:hidden'> {'['} Advancing ....  {']'}   </h1>
      </div>
    </div>
  );
}

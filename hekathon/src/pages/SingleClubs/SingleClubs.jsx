import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import ClabsInfo from './miniComponent/ClabsInfo';

const SingleClubs = props => {
  const clubsData = [
    { 
    id: 1,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
    { 
      id: 2,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
    { 
      id: 3,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
    { 
      id: 4,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
    { 
      id: 5,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
    { 
      id: 6,
    name: 'Research & Innovation Centre - RIC, FEC ', 
    description: "Dear Students, Research and Innovation Centre is the prestigious center for an academic institution.To execute our future plan and farther works, we are glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
    , 
    image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg' 
   },
  

  ];
  const id =useParams().id;

  // filter the id from the array
  const club = clubsData.find((club) => club.id === parseInt(id));
  console.log(club)

  return (
    <div className='container mx-auto'>
<h1 className=' font-bold text-center my-3  text-center md:text-5xl text-3xl mx-auto mt-20 shadow-md mb-10 font-bold uppercase'>{club.name}</h1>

<div className='relative md:flex hidden'>
<img className='absolute md:-left-2 lg:-left-24 top-16' src="https://i.ibb.co/vzMKxTc/Group-272.png" alt="Group-272" border="0"/>
<img className='absolute md:-right-2 lg:-right-20 top-16' src="https://i.ibb.co/sRhmsr1/Group-271.png" alt="Group-271" border="0"/>
</div>
{/*  */}
<div className="hero-content ps-5 flex-col lg:flex-row">
    <img src={club.image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className=''>
      <h1 className="md:text-3xl text-2xl  font-bold">{club.name}</h1>
      <p className="py-6">{club.description}</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>

{/* clubs  message */}
    <ClabsInfo 
    selectedId={id}
    />

    </div>
  )
}

SingleClubs.propTypes = {}

export default SingleClubs
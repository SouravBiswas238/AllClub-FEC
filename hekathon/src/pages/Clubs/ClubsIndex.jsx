import React from 'react'
import PropTypes from 'prop-types'
import ClubsCard from './MiniComponent/ClubsCard.jsx'


const ClubsIndex = props => {

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
  return (
    <div className='md:container mx-auto ' >
      {/* card of a specific clubs */}

<div className='grid  justify-items-center  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 gap-2'>

{
    clubsData.map((club, index) => {
        return (
            <ClubsCard key={index} club={club} />
        );
      })
}
</div>
        
   
        </div>
  )
}

ClubsIndex.propTypes = {}

export default ClubsIndex
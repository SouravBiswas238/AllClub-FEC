// MiniComponent/ClubCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ClubsCard = ({ club }) => {
    const navigation= useNavigate();

  return (
    <div onClick={()=>navigation(`clubs/${club.id}`)} className="max-w-lg m-2 p-2 rounded overflow-hidden shadow-lg">
      <img className="w-full h-72 rounded object-center" src={club?.image} alt={club.name} />


        <div className=" py-4 text-primary cursor-pointer  font-bold text-xl mb-2">{club?.name}</div>
      <div className="px-6 py-4 bg-[#FFF9F9]">

        <p className="text-gray-700 text-base">{club?.description} ... <a className='text-primary underline' href='https://www.google.com'>Read More</a></p>
      </div>
      <div className="px-6 py-4 float-right ">
        <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         <FaEye/> <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

ClubsCard.propTypes = {
  club: PropTypes.object.isRequired,
};

export default ClubsCard;

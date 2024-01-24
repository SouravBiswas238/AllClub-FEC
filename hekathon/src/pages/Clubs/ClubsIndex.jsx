import React from 'react'
import PropTypes from 'prop-types'
import ClubsCard from './MiniComponent/ClubsCard.jsx'
import { MdSearch } from 'react-icons/md';
import { RiCloseLine, RiDeleteBinLine } from 'react-icons/ri';
import { useState, useRef, useEffect } from 'react';



const ClubsIndex = props => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [sortOption, setSortOption] = useState('id');
  const searchRef = useRef(null);

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

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
        name: 'Faridpur Engineering College Software Development Club (FEC_SDC)', 
        description: "Welcome to the Faridpur Engineering College Software Development Club! (FEC_SDC) We're thrilled to have you join our club of interested developers, programmer and tech lovers.Join us on this exciting coding journey, and let make Faridpur Engineering College Software Development Club a fantastic place to learn and grow together! "
        , 
        image: 'https://www.facebook.com/images/groups/groups-default-cover-photo-2x.png' 
       },
        { 
        id: 3,
        name: 'Faridpur Engineering College Photographic Club(FECPC)', 
        description: "Dear Students, Photographic Club is the prestigious center for an academic institution.To execute our future plan e glad to announce our new  committee (2023-2024) of Research and Innovation Centre, FEC. It is expected that this committee will give the college some good quality research work and research related activities"
        , 
        image: 'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/409756361_1098215687837470_6970311737108574874_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=173fa1&_nc_eui2=AeGWX5Dodp2wyW4RPJjLy4EU4Kuvguqs0gzgq6-C6qzSDPUSFm3e3j2-XMjD1gsywF6LEr5HAcFQCNJXN6EtSJ1w&_nc_ohc=Zf9LrDVizQkAX_BHsAr&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDMXXFK7Qm-ZyRUrs8SFXnbXhUOIv7aCiRGtVg81byv2Q&oe=65B6ED9A' 
       },
        { 
        id: 4,
        name: 'FECSA-Faridpur Engineering College Sports Association ', 
        description: "FECSA ফরিদপুর ইন্জিনিয়ারিং কলেজের একটি অরাজনৈতিক ক্রিড়া সংগঠন। এই সংগঠনের প্রধান কাজ হচ্ছে ফরিদপুর ইন্জিনিয়ারিং কলেজের সকল ছাত্র-ছাত্রী তথা আমাদের সংগঠনের সকল সদস্যদের খেলাদুলা নিশ্চিৎ করা। আমাদের খেলাধুলা বিষয়ক সকল Notice আমাদের FECSA এর Group এবং Page এ দেওয়া হয়। FECSA এর সদস্যদের যেমন কিছু নিয়ম মেনে চলতে হয় ঠিক তেমনিই এই Group এ জয়েন করতেও কিছু নিয়ম কানুন মানতে হবে। "
        , 
        image: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t1.6435-9/45076700_758034904529065_1506584225749401600_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9a8829&_nc_eui2=AeH6euP0Mjr8dygEmCCfaveO-ZrKs6dkmdP5msqzp2SZ08fWZWpo2ydImwTvFRHJ8WUAR3pkGD1N0pRzoG3ft7f9&_nc_ohc=e7Gz4Lb5ZOwAX_6JSE_&_nc_ht=scontent.fdac138-2.fna&oh=00_AfDGKflQki77bmhysbQYWmwOZ07zJtDmWH6uaMiq2RU3WQ&oe=65D906B7' 
       },
        { 
        id: 5,
        name: 'Faridpur Engineering College Programming Club (FECPC) ', 
        description: "Dear Students, To go ahead with the contestants, we started topic wise Marathon Contest-01 with 9-day duration.The problems are organized for the Beginner to Advanced level. In that time we can think, rethink, discuss, learn, eating, sleeping, making mess with the problems and solve. Anyone can participate. Happy coding!"
        , 
        image: 'https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/409737823_1412478249304525_4772910118970006486_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeGUj-eIIPPRZKkLT8BALeDeQ36mQUW03vdDfqZBRbTe95FLASp1amiTeKWUnbJ_dHke6NjsSI6dMxuSowfgZVeN&_nc_ohc=Cm06YQcGrGkAX_SaKw2&_nc_ht=scontent.fdac138-2.fna&oh=00_AfAhs6p4kahY5ki1nPwFUojcHCMcMb5jD29BPpAjmAKMWA&oe=65B75B53' 
       },
        
        { 
        id: 6,
        name: 'Faridpur Engineering College Debate Forum (FEC-DF)', 
        description: "ফরিদপুর ইঞ্জিনিয়ারিং কলেজের ছাত্রছাত্রীদের সৃজনশীল, যুক্তিবাদী, বাগ্মী ও নেতৃত্বদানের গুণাবলীসম্পন্ন হিসেবে গড়ে তোলার লক্ষ্যে প্রতিষ্ঠিত FEC-DF  ফরিদপুর ইঞ্জিনিয়ারিং কলেজের ছাত্রছাত্রীদের সৃজনশীল, যুক্তিবাদী, বাগ্মী ও নেতৃত্বদানের গুণাবলীসম্পন্ন হিসেবে গড়ে তোলার লক্ষ্যে প্রতিষ্ঠিত FEC-DF"
        , 
        image: 'https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/265217360_902983647256762_3564099577890145735_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd477f&_nc_eui2=AeEZ80fyqaSiKl6hbuAR3jrMn-Add4tfBq-f4B13i18Gr79NsWgJvgluJlJaPAmWJ_6_W1JJTiIo-0sJD4Fc3Kxq&_nc_ohc=rMbDttdZKagAX9AvFB3&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAFmrrEQqT4AzDMcyi5Ccr9kAxWVO1RbQZjfA2ax0K3hg&oe=65B708D2' 
       },
        
  
      ];

      useEffect(() => {
        const results = clubsData.filter((club) =>
          club.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm]);

   return (
    <div className='md:container mx-auto'>

      {/* Search and filter options */}
      <div className='px-5 my-3 flex flex-wrap justify-between md:space-x-10 items-center border-b pb-2'>
        <h1 className='text-xl md:text-4xl text-3xl uppercase font-bold'>All Clubs of Fec</h1>
        <div className='flex justify-end items-center space-x-2'>
          <div className='relative mx-auto'>
            <input
              type='text'
              name='search'
              id='searchBox'
              ref={searchRef}
              placeholder='Search by club name..'
              className='border border-[#A0A0A0] rounded p-1 w-72 focus:outline-none px-3'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className='absolute top-0 right-0 text-2xl translate-y-1'>
              {searchResults.length > 0 ? (
                <RiCloseLine
                  className='cursor-pointer mr-1 text-neutral-600 hover:text-neutral-800'
                  onClick={() => {
                    searchRef.current.value = '';
                    setSearchTerm('');
                    setSearchResults([]);
                  }}
                />
              ) : (
                <MdSearch
                  className='cursor-pointer mr-1 text-neutral-600'
                  onClick={() => {
                    setSearchTerm(searchRef.current.value);
                  }}
                />
              )}
            </button>
          </div>
          <div className='mr-4'>
            <label className='block'>
              Sort By:
              <select
                value={sortOption}
                onChange={handleSortOptionChange}
                className='ml-2 border border-[#A0A0A0] bg-white p-2 rounded-md'
              >
                <option value='id'>Club ID</option>
                <option value='name'>Club Name</option>
                {/* Add other sorting options */}
              </select>
            </label>
          </div>
        </div>
      </div>

      {/* Display clubs */}
      <div className='grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 md:gap-4 gap-2'>
        {searchResults.length > 0
          ? searchResults.map((club, index) => (
              <ClubsCard key={index} club={club} />
            ))
          : clubsData.map((club, index) => (
              <ClubsCard key={index} club={club} />
            ))}
      </div>
    </div>
  );
};

export default ClubsIndex;
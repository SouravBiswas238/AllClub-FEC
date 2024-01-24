import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

const ClabsInfo = ({selectedId}) => {
    
    const clubsOfficialMessage = [
        {
          id: 1,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },
        {
          id: 2,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },
        {
          id: 3,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },
        {
          id: 4,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },
        {
          id: 5,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },
        {
          id: 6,
          name: 'Clubs Name',
          fullMembers: ['https://i.ibb.co/hcxc46T/381063540-10228650666205984-5970440202753643242-n.jpg','https://i.ibb.co/VQmG4R7/380602744-10228650666485991-7789865044774760289-n.jpg'],
          members: [
           
            {
              id: 1,
              name: 'Kerry Teskey',
              designation: 'President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 2,
              name: 'Kerry kerry',
              designation: 'Vice President',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
            {
              id: 3,
              name: 'Kerry kerry',
              designation: 'Advisor',
              msgHeading: "President's Message - Kerry Teskey (2023-2024)",
              image: 'https://i.ibb.co/yRS7sBB/265178152-1294836790983262-7330140893295243987-n.jpg',
              message:
                `I’m grateful to be a member of this club, and to be able to feel the warmth and compassion that we have for each other. We are a family with diverse backgrounds and interests that come together to make good things happen. There is a tremendous feeling about being part of something that is bigger than yourself, and that connection you feel when helping someone, or perhaps being the recipient of someone else’s help.  Thank you again for the opportunity to serve.`,
            },
          ],
        },

      ];
   
      const singleClubsData = clubsOfficialMessage.find((club) => club.id === parseInt(selectedId));

      
  return (
    <div className='bg-[#FFFFF]'>
        <h1 className='text-center md:text-4xl text-3xl mx-auto mt-20 shadow-md mb-5 font-bold uppercase'>Message from our Faculty  </h1>

{/* official statement of president vice president */}

<div className='md:relative md:flex hidden '>
<img className='absolute md:-left-2 lg:-left-20 top-52' src="https://i.ibb.co/vzMKxTc/Group-272.png" alt="Group-272" border="0"/>
<img className='absolute md:-right-2 lg:-right-20 top-52' src="https://i.ibb.co/sRhmsr1/Group-271.png" alt="Group-271" border="0"/>
</div>
    <div>
     
        <div >
          
        {
            singleClubsData.members?.map((member, index) => (
                <div
                key={index}
                className={` flex md:w-[80%] w-full justify-center mx-auto ${
                  index % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'
                } shadow-lg my-10`}
              >

                <div className='text-center w-[30%]'>
                    <img src='{member.image}' className="bg-[#19FC30] h-[80%] w-full  " />
                     <p className='text-center flex justify-center items-center px-4 pt-2 flex md:text-normal text-sm'>{member.designation} : {member.name} </p>
                </div>
        
        <div className=' w-[70%] bg-[#180303]  text-[#FFFFFF]  py-1'>
                <p className='md:text-2xl text-xl p-2 text-primary text-center '>{member.msgHeading}</p>
                 <p className="px-4 text-[#FFFFFF] md:text-normal text-sm">{member.message} 
                </p>
            <p className='px-4 font-bold mt-2 md:text-xl text-sm'>
                <span >Sincerely, </span> <br />
               {member.name}
             </p>
                </div>
               </div>
            ))
        }
        </div>
  
    </div>
    
  {/* other member list */}
  
  <h1 className='text-center md:text-4xl text-2xl mx-auto mt-20 shadow-md mb-5 font-bold uppercase  border-b'> Full committee member of the club</h1>

  <div className='w-full md:flex items-center justify-center my-5'>
            {
                singleClubsData.fullMembers?.map((item, index) => (

                <img className=' md:m-2 py-2 inline-block' src={item} alt="" /> 
                    
                ))
            }
        </div>




</div>
  )
}


export default ClabsInfo
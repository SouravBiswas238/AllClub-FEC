import React, { useState } from 'react';
import logo from '../../assets/image/logo.png';
import { Link } from 'react-router-dom';

const NavbarIndex = (props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="p-4 bg-black ">
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex items-center p-2">
          <img
            className="text-white h-24 "
            src="https://i.ibb.co/k2cNzKf/Untitled-2-removebg-preview.png"
            alt="club-sphere-logo"
            border="0"
          />
        </div>


  <div className="text-fec-green text-[#78E038] items-center flex-shrink-0 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to="/home">
      <li><a>About Us</a></li>
      </Link>

      {/* nested link */}
      <li>
        <details>
          <summary>
            Events
          </summary>
          <ul className="p-2 bg-[#310505] rounded-t-none">
            <li><a>Techno Fest 2023</a></li>
            <li><a>Techno Fest 2022</a></li>
          </ul>
        </details>
      </li>

      <li><a>Board</a></li>
      <li><a>Gallery</a></li>
{/* nested link */}
<li>
        <details>
          <summary>
            Events
          </summary>
          <ul className="p-2 bg-[#310505] rounded-t-none">
            <li><a>Techno Fest 2023</a></li>
            <li><a>Techno Fest 2022</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
      </div>
    </header>
  );
};

NavbarIndex.propTypes = {};

export default NavbarIndex;

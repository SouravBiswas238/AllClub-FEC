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



        <div className="md:flex hidden items-center p-2">
        <Link to="/">
          <img
            className="text-white h-24 cursor-pointer"
            src="https://i.ibb.co/k2cNzKf/Untitled-2-removebg-preview.png"
            alt="club-sphere-logo"
            border="0"
          />
          </Link>
        </div>




{/* mobile responsice menu */}
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
     
      <ul  tabIndex={0}  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  w-52">
      <Link to="/">
      <li><a>About Us</a></li>
      </Link>

      {/* nested link */}
      <li>
        <details>
          <summary>
            Events
          </summary>
          <ul className="p-2 md:bg-[#310505] rounded-t-none">
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
          <ul className="p-2 md:bg-[#310505] rounded-t-none">
            <li><a>Techno Fest 2023</a></li>
            <li><a>Techno Fest 2022</a></li>
          </ul>
        </details>
      </li>
    </ul>
    </div>

{/* mobile responsice logo */}
    <div className="md:hidden flex items-center p-2">
        <Link to="/">
          <img
            className="text-white h-24 cursor-pointer"
            src="https://i.ibb.co/k2cNzKf/Untitled-2-removebg-preview.png"
            alt="club-sphere-logo"
            border="0"
          />
          </Link>
      </div>

  <div className="text-fec-green text-[#78E038] items-center flex-shrink-0 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to="/">
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

      <Link to="/contact">
      <li><a>Contact</a></li>
      </Link>
    </ul>
  </div>
      </div>
    </header>
  );
};

NavbarIndex.propTypes = {};

export default NavbarIndex;

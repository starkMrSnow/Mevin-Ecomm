import React, { useState } from 'react';
import './HomePage.css';
import { FaBars } from "react-icons/fa";
import logo from '../../Assets/logo.png';
import { GoSearch } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";


export default function HomePage() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query); // Implement your search functionality here
  };

  return (
    <>
      <div>
        <div className='top'></div>
        <div className='bottom'>
          {/* <FaBars className='hamburger' /> */}
          <img src={logo} alt="Logo" className="logo" />

          <div className="search-bar">
            <div className='search-input'>
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="I'm searching for..."
              />
            </div>

            <button className="search-button" onClick={handleSearch}>
              <GoSearch className='searchicon' />
            </button>
          </div>
          <div className='row'>
          <VscAccount className='account'/>
          <h6>ACCOUNT</h6>
          <RiArrowDropDownLine className='dropdown'/>
          <IoCartOutline className='cart'/>
          <h6>Cart</h6>
          <RiArrowDropDownLine className='dropdown'/>
          </div>
        </div>
      </div>

      <div>
        body
      </div>

      <div>
        footer
      </div>
    </>
  );
}

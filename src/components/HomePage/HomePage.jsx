import React, { useState } from 'react';
import './HomePage.css';
import { FaBars } from "react-icons/fa";
import logo from '../../Assets/logo.png';
import { GoSearch } from "react-icons/go";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import vixen from '../../assets/vixen.png';

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
        <div className="top"></div>
        <div className="bottom">
          <FaBars className="hamburger" />
          <img src={logo} alt="Logo" className="logo" />

          <div className="search-bar">
            <div className="search-input">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="I'm searching for..."
              />
            </div>

            <button className="search-button" onClick={handleSearch}>
              <GoSearch className="searchicon" />
            </button>
          </div>
          <div className="row">
            <VscAccount className="account" />
            <h6>ACCOUNT</h6>
            <RiArrowDropDownLine className="dropdown" />
            <IoCartOutline className="cart" />
            <h6>Cart</h6>
            <RiArrowDropDownLine className="dropdown" />
          </div>
        </div>
      </div>

      <div className="rectangle">
        <div className="grid-container">
          <div className="grid-item left-grid">
            <h5>Today's pick</h5>
            <h3 className="w">WOMEN'S WEAR</h3>
            <h6 className="offer">GET 70% OFF</h6>
            <div className="btn">
              <button className="btnOne">ORDER NOW</button>
              <button className="btnTwo">VIEW MORE</button>
            </div>
          </div>
          <div className="grid-item right-grid">
            <img src={vixen} alt="vixen" className="vixen" />
          </div>
        </div>
      </div>

      <div className="content">
        <p>stanley</p>
      </div>
    </>
  );
}

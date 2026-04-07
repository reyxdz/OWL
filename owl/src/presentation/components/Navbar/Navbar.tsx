import React from 'react';
import './Navbar.css';
import logo from '../../assets/owl_logo.png';

export const Navbar = () => {
  return (
    <nav className="navbar clay-card">
      <div className="navbar-left">
        <img src={logo} alt="OWL Logo" className="navbar-logo" />
        <span className="navbar-title">OWL</span>
      </div>
      
      <div className="navbar-right">
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21.0004 21.0004L16.6504 16.6504" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input type="text" placeholder="Search..." className="navbar-search clay-input" />
        </div>
        <button className="filter-button clay-button secondary">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

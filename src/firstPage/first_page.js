import React from 'react';
import FloatyMan from './FloatyMan.png';

import './first_page.css';

function FirstPage() {
  return (
    <>
    <div className='navbar'>
        <span className="company-name">TTC</span>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
    </div>
    <div className='grid-container'>
        <div className='left-column'>
            <div className='title'>
                Your Idea,
                <br />
                Your Business,
                <br />
                Our Tech
            </div>
            <div className='subtext'>
                Merging AI, data, and web development to boost businesses from barber shops to restaurants. Elevate with us.
            </div>
        </div>
        <div className='right-column'>
            <img src={FloatyMan} alt="FloatyMan" className="FloatyMan" />
        </div>
    </div>
  </>
  );
}

export default FirstPage;

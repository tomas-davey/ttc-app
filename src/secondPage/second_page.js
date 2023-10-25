import React from 'react';
import imagePath from './spaceman2.png';
import business_anal_logo from './2nd_logos/business_anal_logo.png'
import archer_logo from './2nd_logos/archer_logo.png'
import phone_logo from './2nd_logos/phone_logo.png'
import stocks_logo from './2nd_logos/stocks_logo.png'

import './second_page.css';

function SecondPageContent() {
  return (
    <div className="second-page-content">

      <img className='spaceman-image2' src={imagePath} alt="Spaceman floating" /> 

      <div>
        <div className="features-title">Features</div>
        <div className="second-page-title">
          <span>Explore Our Professional</span>
          <br />
          <span>Technology Solutions</span>
        </div>

        <div className="grid-2x2">
      <div className="grid-item">
        <img className="grid-item-logo" src={business_anal_logo} alt="Logo 1" />
        <div className="grid-item-content"> {/* New Wrapper */}
          <div className="grid-item-text">Business analytics</div>
          <div className="grid-item-description">Optimize your business processes with our top-notch analytics tools.</div>
        </div>
      </div>
      
      <div className="grid-item">
        <img className="grid-item-logo" src={archer_logo} alt="Logo 2" />
        <div className="grid-item-content"> {/* New Wrapper */}
          <div className="grid-item-text">App/website creation</div>
          <div className="grid-item-description">Craft stunning web and mobile applications tailored to your needs.</div>
        </div>
      </div>
      
      <div className="grid-item">
        <img className="grid-item-logo" src={phone_logo} alt="Logo 3" />
        <div className="grid-item-content"> {/* New Wrapper */}
          <div className="grid-item-text">AI solutions</div>
          <div className="grid-item-description">Harness the power of artificial intelligence for your projects.</div>
        </div>
      </div>
      
      <div className="grid-item">
        <img className="grid-item-logo" src={stocks_logo} alt="Logo 4" />
        <div className="grid-item-content"> {/* New Wrapper */}
          <div className="grid-item-text">Database design</div>
          <div className="grid-item-description">Organize and manage your data with our expert databases.</div>
        </div>
      </div>
    </div>
      </div>

    </div>
  );
}

export default SecondPageContent;

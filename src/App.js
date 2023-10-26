// App.js

import './App.css';
import SecondPageContent from './secondPage/second_page';  // Your existing imports
import Spline from '@splinetool/react-spline';  // Import the Spline component

function App() {
  return (
    <div className='container'>
      <div className="first-page">
        {/* Wrap the Spline component in a container */}
        <div className="SplineContainer">
          <Spline scene="https://prod.spline.design/zqbufJGW6IcE-SPA/scene.splinecode" />
        </div>
      </div> 
      <div className='second-page'>
        <SecondPageContent />   {/* Your existing second page component */}
      </div>
    </div>
  );
}

export default App;

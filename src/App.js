import './App.css';
import FloatyMan from './FloatyMan.png';

function App() {
  return (
    <div className='App'>
      <div className="first-page">
        <div className='grid-container'>
          <div className='left-column'>
            Your Idea,
            <br />
            Your business,
            <br />
            Our Tech
          </div>
          <div className='right-column'>
            <img src={FloatyMan} alt="FloatyMan" className="FloatyMan"/>
          </div>
        </div>
      </div> 
      <div className="second-page">
      </div>
    </div>
  );
}

export default App;

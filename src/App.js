import './App.css';
import SecondPageContent from './secondPage/second_page';  // Import the new component

function App() {
  return (
    <div className='container'>
      <div className="first-page">
      </div> 
      <div className='second-page'>
        <SecondPageContent />   {/* Use the new component */}
      </div>
    </div>
  );
}

export default App;

import './App.css';
import SecondPageContent from './secondPage/second_page';  // Import the new component
import FirstPage from './firstPage/first_page'

function App() {
  return (
    <div className='App'>
      <div className="first-page">
        <FirstPage/>
      </div> 
      <div className='second-page'>
        <SecondPageContent />   {/* Use the new component */}
      </div>
    </div>
  );
}

export default App;

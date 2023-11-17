import './App.css';
import SecondPageContent from './secondPage/second_page';  // Import the new component
import FirstPage from './firstPage/first_page'
import ThirdPage from './thirdPage/third_page';

function App() {
  return (
    <div className='App'>
      <div className="first-page">
        <FirstPage/>
      </div> 
      <div className='second-page'>
        <SecondPageContent />
      </div>
      <div className='third-page'>
        <ThirdPage />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import SecondPageContent from './secondPage/second_page';  // Import the new component
import FirstPage from './firstPage/first_page'
import ThirdPage from './thirdPage/third_page';
import ForthPage from './forthPage/forth_page';
import FifthPage from './fifthPage/fifth_page';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'AvenirNextLTPro-Regular, Arial',
      textTransform: 'none',
      fontSize: 16,
    },
    h2: {
      fontFamily: 'Arial', // Set the desired font for h2
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <div className="first-page" id="1">
          <FirstPage/>
        </div> 
        <div className='second-page' id="2">
          <SecondPageContent />
        </div>
        <div className='third-page' id="3">
          <ThirdPage />
        </div>
        <div className='forth-page'>
          <FifthPage />
        </div>
        <div className='forth-page' id="4">
          <ForthPage />
        </div>
      </div>
      </ThemeProvider>
  );
}

export default App;

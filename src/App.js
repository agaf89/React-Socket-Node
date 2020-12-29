import 'materialize-css'
import  InputChat  from './components/InputChat';
import MainChat  from './components/MainChat';
import { Navbar } from './components/Navbar';

function App() {

  
  return (
    <>
      <Navbar/>
      <div className='container'>
          <MainChat/>
          <InputChat/>
      </div>
      
    </>
  );
}

export default App;

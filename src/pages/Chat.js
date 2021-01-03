import  InputChat  from './../components/InputChat';
import MainChat  from './../components/MainChat';
import { Navbar } from './../components/Navbar';

export const Chat = () => {
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
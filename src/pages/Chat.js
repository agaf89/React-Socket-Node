import  InputChat  from './../components/InputChat';
import MainChat  from './../components/MainChat';

export const Chat = () => {
    return (
        <>
          <div className='container'>
              <MainChat/>
              <InputChat/>
          </div>
          
        </>
      );
}
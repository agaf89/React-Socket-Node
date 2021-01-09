import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InformationTable } from '../components/InformationTable';
import { Navbar } from '../components/Navbar';
import { socket } from '../helpers/socket';
import { useHttp } from '../hooks/http.hook';
import { createPost, setCountUsers } from '../redux/actions';
import  InputChat  from './../components/InputChat';
import MainChat  from './../components/MainChat';

export const Chat = () => {
  const { request } = useHttp()
  const { isAuthenticated } = useSelector( reducer => reducer.auth )
  const { token } = useSelector( reducer => reducer.auth)
  const dispatch = useDispatch()
  const messageHandler = async () => {
    const data = await request('/chat/posts', 'GET', null, {
      authorization: `Bearer ${token}`
    })
    !data && console.log(data)
    data && dispatch(createPost(data))
  }
  useEffect(()=>{
    console.log("isAuthenticated")
    messageHandler()
    socket.emit('usersInfo', token)
  },[])
  


  return (
      <>
        <div className='container'>
            <MainChat/>
            <InputChat/>
            <InformationTable/>
        </div>
        
      </>
    );
}
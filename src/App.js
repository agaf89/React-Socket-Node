import 'materialize-css'
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'

import { Navbar } from './components/Navbar';
import { useRoutes } from './routes';
import { useEffect } from 'react';
import { socket } from './helpers/socket';
import { useMessage } from './hooks/message.hook';
import { useAuth } from './hooks/auth.hook';
import { Spinner } from './components/Spinner';



function App() {
  const {logout , ready} = useAuth()
  const message = useMessage()
  const dispatch = useDispatch()
  const { isAuthenticated, token } = useSelector( state => state.auth )
  const { loading } = useSelector( state => state.login )
  const routes = useRoutes( isAuthenticated )


  useEffect(()=>{
    if (isAuthenticated){
      socket.on('broadcast', (e) => {
        message(`${e.newUser} зашел в чат 👋`)
      })
      socket.on('error', (error) => {
        console.log('ОШибка пришла от сюда 1')
        message(error, true)
        logout()
      })
    }
    },[isAuthenticated])
  if (!ready){
    return <Spinner/>
  }
  return (
    <Router>
      { loading && <Spinner/>}
      {isAuthenticated && <Navbar/>}
      {routes}
    </Router>
  );
}

export default App;

import 'materialize-css'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { useRoutes } from './routes';

function App() {
  const { isAuthenticated, token } = useSelector( state => state.auth )
  const routes = useRoutes( token && isAuthenticated )
  
  return (
    <Router>
      { isAuthenticated && <Navbar/> }
      {routes}
      
    </Router>
  );
}

export default App;

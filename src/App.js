import logo from './logo.svg';
import './App.css';
import TableData from './comp/TableData';
import Login from './comp/Login';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App bg-primary">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark m-2">
          <a className="navbar-brand text-white p-1 m-1" href="">EMS</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
           
              <a className="nav-item nav-link "><Link to="/login" className='text-white text-decoration-none'> Login</Link></a>
              
            
            </div>
          </div>
        </nav>

        <Route path="/register" component={Login} />
       
      </div>
    </Router>
  );
}

export default App;

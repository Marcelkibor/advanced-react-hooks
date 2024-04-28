import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AuthenticateUser from './components/Authenticate';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<AuthenticateUser/>}/>
    </Routes>
      
    </Router>
  );
}

export default App;

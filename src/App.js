import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AuthenticateUser from './components/Authenticate';
import Memoized from './components/Memoized';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<AuthenticateUser/>}/>
      <Route path='/mem' element={<Memoized/>}/>
    </Routes>
    </Router>
  );
}

export default App;

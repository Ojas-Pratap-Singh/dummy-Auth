
import './App.css';
import Singnup from './Signup';
import Login from './Login'
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Singnup/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </div>
  );
}

export default App;
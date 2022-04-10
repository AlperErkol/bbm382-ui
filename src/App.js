import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account/signin' element={<SignIn/>}/>
          <Route path='/account/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    
  );
}

export default App;

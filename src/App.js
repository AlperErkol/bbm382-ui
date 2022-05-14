import './App.css';


import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Footer from './components/Footer';

import {
  Routes,
  Route,
} from "react-router-dom";
import Timeline from './pages/Timeline';
import Admin from './pages/Admin';
import Search from './pages/Search';
import NewProfile from './pages/NewProfile';
import PostDetail from './components/PostDetail';


function App() {

  return (
    
      <div className="App relative w-full">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/timeline' element={<Timeline/>}/>
            <Route path='/search/:query' element={<Search/>}/>
            <Route path='/account/signin' element={<SignIn/>}/>
            <Route path='/account/signup' element={<SignUp/>}/>
            <Route path='/profile/:userId' element={<NewProfile/>}/>
            <Route path='/post/:postId' element={<PostDetail/>} />
          </Routes>
        <Footer/>
        
      </div>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import Navbar from './Navbar';
import Cake from './Cake';
import { Image } from 'antd';
import CakeList from './CakeList';
import UsersList from './UsersList';
import SignUp from './SignUp';
import Meeting from './Meeting';
import MarkAttendence from './MarkAttendence';
import CakeDetails from './CakeDetails';
import { BrowserRouter, Navigate,Route,Routes,useNavigate } from 'react-router-dom';
import AComponent from './AComponent';
import BComponent from './BComponent';
import CComponent from './CComponent';
import DComponent from './DComponent';
import Search from './Search';
function App() {
  var money = 10000;
  
  return (
    <div style={{textAlign:'left',  backgroundImage:"CakeStoreBG.jpg"} }>
      <BrowserRouter>
      <Navbar/>
      {/* <AComponent data={money}/> */}

 
       <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/cakelist' element={<CakeList/>}> </Route>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<SignUp></SignUp>}> </Route>
        <Route path='/cakeDetails/:cakeid' element={<CakeDetails/>}> </Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes> 
      </BrowserRouter>

  
      </div>

  );
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

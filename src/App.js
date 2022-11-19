import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'; 
  import Home from "./components/Home.js";
  import RestaurantCreate from "./components/RestaurantCreate.js";
  import RestaurantDetails from "./components/RestaurantDetails.js";
  import RestaurantList from "./components/RestaurantList.js";
  import RestaurantSearch from "./components/RestaurantSearch.js";
  import RestaurantUpdate from "./components/RestaurantUpdate.js";
  import Login from "./components/Login.js";
  
  import NavBar from "./components/NavBar.js";



function App() {
  return (
    <div className="App">
  
      <Router>

      
        
        <NavBar/>
        <Routes>
          <Route path='/create' element={<RestaurantCreate/>}/>
          <Route path='/details' element={<RestaurantDetails/>}/>
          <Route path='/list' element={<RestaurantList/>}/>
          <Route path='/search' element={<RestaurantSearch/>}/>
          <Route path='/update/:id'
          element={<RestaurantUpdate />}
          />
         
          
       

       
    
          <Route path='/login'
          element={<Login />}
          />
          <Route exact path='/' element={<Home/>}/>

          </Routes>
        
     
      </Router>
      
       
    </div>
  );
}

export default App;

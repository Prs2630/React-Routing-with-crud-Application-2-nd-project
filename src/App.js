// import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './compoents/Home';
import About from './compoents/About';
import Contact from './compoents/Contact';
import Header from './compoents/Header';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  
  
} from "react-router-dom";
import Notfound from './compoents/Notfound';
import AddUser from './compoents/AddUser';
import EditUser from './compoents/EditUser';
import ViewUser from './compoents/ViewUser';



function App() {
  render (
    <BrowserRouter>
    <div className='app'>
    <Header/>
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      
      <Route path="/contact" element={<Contact />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/users/add" element={<AddUser />}/>
      <Route path="/users/edit/:id" element={<EditUser />}/>
      <Route path="/users/view/:id" element={<ViewUser />}/>

      <Route path="*" element={<Notfound />}/>
      
        
        
    </Routes>
    
    </div>
  </BrowserRouter>,
  document.getElementById("root")
      
  );
}

export default App;

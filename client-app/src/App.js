import React from 'react';
import './App.css';
import { BrowserRouter as Router,
  Route,
  Routes,useNavigate } from "react-router-dom";
import WordLayout from './components/Layout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import List from "./components/List/List";



function App() {
  return (
    
    <React.StrictMode>
      <WordLayout/>
      <Router>
      <Routes>
    <Route  path="login" element = {<Login />} />
    <Route  path="/home" element = {<Home />} />
    <Route  path="/list" element = {<List />} />
               </Routes>  
               </Router>
      </React.StrictMode>
    
  )
}

export default App;
import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes, useNavigate
} from "react-router-dom";
import WordLayout from './components/Layout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Podium from "./components/Podium/Podium";
import Profile from "./components/Profile/profilePage";

function App() {
  return (

    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<WordLayout />} />
          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/podium" element={<Podium />} />
          <Route path="/profilePage/:id" element={<Profile />} />
        </Routes>
      </Router>
    </React.StrictMode>

  )
}

export default App;
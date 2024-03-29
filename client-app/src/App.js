import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import WordLayout from './components/Layout';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Podium from "./components/Podium/Podium";
import Profile from "./components/Profile/profilePage";
import EditProfile from "./components/Profile/editProfile";
import Meetings from "./components/Meetings/Meetings";
import SearchHelp from "./components/Search/Search";

function App() {
  return (

    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<WordLayout />} />
          <Route path="login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchHelp />} />
          <Route path="/podium" element={<Podium />} />
          <Route path="/profilePage" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/meetings" element = {<Meetings />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>

  )
}

export default App;
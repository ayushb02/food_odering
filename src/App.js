import logo from './logo.svg';
import './App.css';
import Header from './components/header';

import React from 'react';
import {  Outlet } from "react-router-dom"; 
import Fotter from './components/Fotter';
import { auth } from "./components/firebase";
import  { useEffect, useState } from "react";


function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      <Header name={userName}/>
      <Outlet /> 
      <Fotter />  
    </div>
  );
}


export default App;

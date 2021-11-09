import './App.css';

import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import React from 'react';
import Login from "./components/Login"
import { selectUser } from './features/userSlice';
import Logout from './components/Logout';
import {useSelector} from "react-redux";

const App=()=>{

  const user= useSelector(selectUser);

  return (
    <div>
      {user ? <UnAuth/> : <Login/>}
    </div>

  );
};

const UnAuth = ()=>{
  return(
  <BrowserRouter>
    <div className="App">
       <Main />
    </div>

  </BrowserRouter>
)
}

export default App;
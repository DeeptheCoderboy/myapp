import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Textform from './components/textform';
import About from './components/about';
import { useState } from 'react';
import Alert from './components/alert';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";


function App() {
const[mode,setmode]=useState("light");

const setToggle=()=>{
   if(mode==='light'){
   setmode("dark")
   document.body.style.backgroundColor="grey";
   salert("background is dark","success")

   }
   else{
   setmode("light")
   document.body.style.backgroundColor="white";
   salert("background is light","success");
  
   }
   
}
const[alert,Setalert]=useState("null");



const salert=(massege,type)=>{
  Setalert({
    msg:massege,
    type:type
  })
  setTimeout(() => {
    Setalert("null");
  },1500);
}
  return (

  <Router>
    <div>
    <Navbar x='apputils' mode={mode} toggle={setToggle}/>
    <Alert     type={alert} />
    <div className="container my-3">
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/textform">
          <Textform title="enter the title"  showAlert={salert} heading="write Note" mode={mode} />
          </Route>
         
        
        </Switch>

    {/* <About/> */}  
    </div>
    </div>
    </Router>

  );
}

export default App;



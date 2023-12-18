import React, { useEffect } from 'react';
import Head from './components/head/head'
import { Route, Routes, Navigate } from 'react-router-dom';


import Home from "./components/home/home"


import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css'

function App() {
  


 
  return (

<div>
<Head/>
    <Routes>
        
       <Route path='/Portafolio/' element={<Home/>} />
       
  
  
      
  
    </Routes>
  </div>
  )
}

export default App

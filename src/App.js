// src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Componets/Navbar';
import Home from './Componets/Home';
import LoginForm from './Componets/LoginForm';
import AddPostForm from './Componets/AddPostForm';
import Contact from './Componets/Contact';

function App() {
  return (
    <>
    <Navbar />
    <Contact/>
    <AddPostForm/>
    
   
    
    <Router>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/post" element={<AddPostForm/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        {/* <Route path="/about" element={<About/>}/> */}

      </Routes>
    </Router>
    </>
  );
}

export default App;

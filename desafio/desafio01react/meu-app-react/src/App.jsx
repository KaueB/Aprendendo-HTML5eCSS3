import React from "react";

import './style/App.css';

import Header from './components/header.jsx';
import Main from './components/main.jsx'; 
import Nav from './components/Nav'; 
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
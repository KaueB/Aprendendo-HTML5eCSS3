import React from "react";

import './style/App.css';

import Header from './components/header.jsx';
import Nav from './components/Nav'; 
import Main from './components/main.jsx'; 
/* import Footer from './components/Footer.jsx' */

function App() {
  return (
    <div>
      <Header/>
      <Nav/>
      <Main/>
    </div>
  );
};

export default App;
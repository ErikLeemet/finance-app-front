import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Component } from 'react';
import Dashboard from './pages/Dashboard';
import Procurements from './pages/Procurements';
import Projects from './pages/Projects';
import Resources from './pages/Resources';

function App() {
    let Component
    switch (window.location.pathname) {
        case "/Dashboard":
            Component = Dashboard;
        break;
        case "/Procurements":
            Component = Procurements;
        break;
        case "/Resources":
            Component = Projects;
        break;
        case "/Projects":
            Component = Resources;
        break;
    }
  return (
    <>
    <Navbar/>
    <Component />
    </>
  );
}

export default App;

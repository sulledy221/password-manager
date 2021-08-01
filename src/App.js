import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
// * "../" = goes up one directory 
// * "./"  = starting from same directory
import Login from "./components/Login"
import Navbar from './components/Navbar';
import Notes from './components/Notes'

export default function App() {
  return (
    <Router>
        <Navbar />
    <div className="App">
      <Switch>
        <Route path="/notes">
          <Notes />
        </Route >
        <Route path="/login">
          <Login />
        </Route>
      </Switch >
      </div >
    </Router>
  );
}



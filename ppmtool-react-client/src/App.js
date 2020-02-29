import React from 'react';
import './App.css';
import Dashborad from './components/Dashboard/Dashborad';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddProject from './Project/AddProject/AddProject';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path = "/dashboard" component = {Dashborad}/>
        <Route exact path = "/addProject" component = {AddProject}/>
      </div>
    </Router>

  );
}

export default App;

import React from 'react';
import './App.css';
import Dashborad from './components/Dashboard/Dashborad';
import Header from './components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Dashborad />
    </div>
  );
}

export default App;

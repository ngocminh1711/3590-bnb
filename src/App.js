import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import CreateHouseForRent from "./components/CreateHouseForRent/CreateHouseForRent";

function App() {
  return (
    <div className="App">

       <CreateHouseForRent/>

    </div>
  );
}

export default App;

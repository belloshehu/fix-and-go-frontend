import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error';
import Login from './components/Forms/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='login' element={<Login/>}/>
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;

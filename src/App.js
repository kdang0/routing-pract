import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import Input from './components/Input';
import Home from './components/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:input/" element={<Input/>}/>
            <Route path="/:input/:colorOne/:colorTwo" element={<Input/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

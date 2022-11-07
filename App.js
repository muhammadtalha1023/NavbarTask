import React from 'react';
import './App.css';
import Parent from './components/Parent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';



function App() 
{
  return(
  <BrowserRouter>
    <div className='App'>
      <Parent />
      <Routes>
      <Route path="/Parent" element={<Parent />}>
      </Route>
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App;
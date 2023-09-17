import './App.css'
import SignIn from './Component/SignIn'
import Dashboad from './Component/Dashboad'
import Preferences from './Component/Preferences';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const token = localStorage.getItem('token')
    if(!token) {
      return <SignIn/>
    }
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboad/>} />
        <Route path="users" element={<Preferences />}>
        </Route>
      </Routes>
    </>
  )
}

export default App

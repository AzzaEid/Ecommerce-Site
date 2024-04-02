import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  )
}

export default Root;

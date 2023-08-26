import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

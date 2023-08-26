import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const username = localStorage.getItem('username')

  const logout = () => {
    localStorage.removeItem('username')
    navigate('/')
  }

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">{username}</a>
        <button className="boton info" onClick={logout}>Cerrar Sesión</button>
      </div>
    </nav>
  )
}

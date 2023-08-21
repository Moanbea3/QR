import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthUsers } from '../constants/UserCollection'

export const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginError, setIsLoginError] = useState(false)

  const handleLogin = () => {
    const esUsuarioAutorizado = AuthUsers.find(
      (user) => user.username === username && user.password === password
    )

    if (esUsuarioAutorizado) {
      navigate('/qr')
    } else {
      setIsLoginError(true)
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isLoginError &&
          <strong className="error">
            Ocurrio un error al iniciar sesión intente nuevamente
          </strong>
        }
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}
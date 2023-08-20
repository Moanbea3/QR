import { Link, useLocation } from 'react-router-dom'

export const ResultadoPago = () => {
  const location = useLocation()
  const { message, type = 'success' } = location.state

  return (
    <>
      <h2 className={type}>{message}</h2>
      <Link to="/">
        <button className="volver">Volver a inicio</button>
      </Link>
    </>
  )
}
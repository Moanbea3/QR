import { Link, useLocation } from 'react-router-dom'

export const ResultadoPago = () => {
  const location = useLocation()
  const { message } = location.state

  return (
    <>
      <h2 className="success">{message}</h2>
      <Link to="/">
        <button className="volver">Volver a inicio</button>
      </Link>
    </>
  )
}
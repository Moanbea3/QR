import { Link, useLocation } from 'react-router-dom'

export const ResultadoPago = () => {
  const location = useLocation()
  const { message, monto, type } = location.state

  return (
    <div className="d-flex flex-column align-items-center mt-3">
      <h2 className={type}>{message}</h2>
      <Link to="/home" state={{ monto }}>
        <button className="boton info my-2">Volver a inicio</button>
      </Link>
    </div>
  )
}
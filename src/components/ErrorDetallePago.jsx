import { Link, useRouteError } from 'react-router-dom'

export const ErrorDetallePago = () => {
  const error = useRouteError()

  if (!error?.data) return (
    <>
      <h2>Ocurrio un error inesperado</h2>
      <Link to="/qr">
        <button className="info">Volver al inicio</button>
      </Link>
    </>
  )

  return (
    <>
      <h2>{error.data.message}</h2>
      <Link to="/qr">
        <button className="info">Volver al inicio</button>
      </Link>
    </>
  )
}

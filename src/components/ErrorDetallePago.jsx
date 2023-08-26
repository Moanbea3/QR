import { Link, useRouteError } from 'react-router-dom'

export const ErrorDetallePago = () => {
  const error = useRouteError()

  if (!error?.data) return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>Ocurrio un error inesperado</h2>
      <Link to="/home">
        <button className="boton info my-2">Volver al inicio</button>
      </Link>
    </div>
  )

  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>{error.data.message}</h2>
      <Link to="/home">
        <button className="boton info my-2">Volver al inicio</button>
      </Link>
    </div>
  )
}

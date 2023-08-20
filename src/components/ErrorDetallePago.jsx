import { Link, useRouteError } from 'react-router-dom'

export const ErrorDetallePago = () => {
  const error = useRouteError()

  return (
    <>
      <h2>{error.data.message}</h2>
      <Link to="/">
        <button className="volver">Volver al inicio</button>
      </Link>
    </>
  )
}

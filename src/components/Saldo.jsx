import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Saldo = ({ saldo = 10000 }) => {
  const location = useLocation()
  const montoCompra = location.state?.monto ?? 0

  return (
    <>
      <div className="d-flex flex-column align-items-center my-4">
        <h4>Su saldo es:</h4>
        <h4>$ {saldo - montoCompra}
        </h4>
        <Link to="qr" relative="route">
          <button className="boton info mt-4">Escanear</button>
        </Link>
      </div>
    </>
  )
}

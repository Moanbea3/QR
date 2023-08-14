import { useState } from 'react'
import { aprobarPago, rechazarPago } from '../helpers/pagos'
import { useFetchDetallePago } from '../hooks/useFetchDetallePago'

export const DetallePago = ({ idTrx }) => {
  const [resultadoPago, setResultadoPago] = useState('')
  const { detallePago, isLoading } = useFetchDetallePago(idTrx)

  const onAprobarPago = async () => {
    const pagoAprobado = await aprobarPago(idTrx)
    if (pagoAprobado) setResultadoPago('El pago ha sido aprobado exitosamente')
  }

  const onRechazarPago = async () => {
    const pagoRechazado = await rechazarPago(idTrx)
    if (pagoRechazado) setResultadoPago('El pago ha sido rechazado')
  }

  return (
    isLoading ? (
      <>
        <p>
          <strong>Cargando pago...</strong>
        </p>
        <span className="loader"></span>
      </>
    ) : (
      <>
        <div className="detalle">
          <h2>Detalle de la compra</h2>
          <p>Nro. transacción: {detallePago.idTrx}</p>
          <p>Monto: ${detallePago.monto}</p>
          <p>Fecha: {detallePago.fecha}</p>
          <p>
            <strong>{resultadoPago}</strong>
          </p>
        </div>
        <div className="botones">
          <button className="boton aceptar" onClick={onAprobarPago}>Aceptar</button>
          <button className="boton rechazar" onClick={onRechazarPago}>Rechazar</button>
        </div>
      </>
    )
  )
}
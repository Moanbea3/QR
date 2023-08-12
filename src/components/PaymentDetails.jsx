import { useState } from 'react'

export const PaymentDetails = ({ detallePago }) => {
  const [estadoPago, setEstadoPago] = useState(null)

  const confirmarPago = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/pagos/${detallePago.idTrx}/aprobar`,
        { method: 'PUT' }
      )

      if (!response.ok) throw new Error('Error al confirmar el pago')

      setEstadoPago('Pago aprobado!')
    } catch (error) {
      console.error('Error al aceptar el pago:', error)
    }
  }

  const rechazarPago = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/pagos/${detallePago.idTrx}/rechazar`,
        { method: 'PUT' }
      )

      if (!response.ok) throw new Error('Error al rechazar el pago')

      setEstadoPago('Pago rechazado!')
    } catch (error) {
      console.error('Error al rechazar el pago:', error)
    }
  }



  return (
    <>
      <div className="detalle">
        <h2>Detalle de la compra</h2>
        <p>Nro. transacción: {detallePago.idTrx}</p>
        <p>Monto: ${detallePago.monto}</p>
        <p>Fecha: {detallePago.fecha}</p>
        {estadoPago && (
          <p>
            <strong>{estadoPago}</strong>
          </p>
        )}
      </div>
      <div className="botones">
        <button className="boton aceptar" onClick={confirmarPago}>Aceptar</button>
        <button className="boton rechazar" onClick={rechazarPago}>Rechazar</button>
      </div>
    </>
  )
}
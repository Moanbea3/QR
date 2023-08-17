import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { aprobarPago, rechazarPago } from '../helpers/pagos'
import { useFetchDetallePago } from '../hooks/useFetchDetallePago'
import { Loader } from './Loader'
import { ResultadoPago } from './ResultadoPago'

export const DetallePago = () => {
  const { idTrx } = useParams()
  const { detallePago, isLoading } = useFetchDetallePago(idTrx)
  const [resultadoPago, setResultadoPago] = useState('')
  const [error, setError] = useState(Error())


  const onAprobarPago = async () => {
    try {
      const message = await aprobarPago(idTrx)
      setResultadoPago(message)
    } catch (error) {
      console.error(error)
      setResultadoPago('')
      setError(error)
    }
  }

  const onRechazarPago = async () => {
    try {
      const message = await rechazarPago(idTrx)
      setResultadoPago(message)
    } catch (error) {
      console.error(error)
      setResultadoPago('')
      setError(error)
    }
  }

  return (
    isLoading ? (
      <Loader />
    ) : (
      <>
        <div className="detalle">
          <h2>Detalle de la compra</h2>
          <p>Nro. transacción: {detallePago.idTrx}</p>
          <p>Monto: ${detallePago.monto}</p>
          <p>Fecha: {detallePago.fecha}</p>
          {resultadoPago
            ? <ResultadoPago message={resultadoPago} />
            : <ResultadoPago message={error.message} type='error' />
          }
        </div>
        <div className="botones">
          <button className="boton aceptar" onClick={onAprobarPago}>Aceptar</button>
          <button className="boton rechazar" onClick={onRechazarPago}>Rechazar</button>
        </div>
      </>
    )
  )
}
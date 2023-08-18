import { useNavigate, useParams } from 'react-router-dom'
import { aprobarPago, rechazarPago } from '../helpers/pagos'
import { useFetchDetallePago } from '../hooks/useFetchDetallePago'
import { Loader } from './Loader'

export const DetallePago = () => {
  const { idTrx } = useParams()
  const navigate = useNavigate()
  const { detallePago, isLoading } = useFetchDetallePago(idTrx)

  const onAprobarPago = async () => {
    try {
      const message = await aprobarPago(idTrx)
      navigate('/pagos/result', {
        replace: true,
        state: {
          message
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  const onRechazarPago = async () => {
    try {
      const message = await rechazarPago(idTrx)
      navigate('/pagos/result', {
        replace: true,
        state: {
          message
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  if (isLoading) return <Loader />

  return (
    <>
      <div className="detalle">
        <h2>Detalle de la compra</h2>
        <p>Nro. transacción: {detallePago.idTrx}</p>
        <p>Monto: $ {detallePago.monto}</p>
        <p>Fecha: {detallePago.fecha}</p>
      </div>
      <div className="botones">
        <button className="boton aceptar" onClick={onAprobarPago}>Aceptar</button>
        <button className="boton rechazar" onClick={onRechazarPago}>Rechazar</button>
      </div>
    </>
  )
}
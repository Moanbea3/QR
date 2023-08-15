import { Messages } from '../constants/Messages'

const urlPagos = 'http://localhost:8080/api/pagos';

export const getDetallePago = async (idTrx) => {
  const response = await fetch(`${urlPagos}/${idTrx}`)

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return await response.json()

}

export const aprobarPago = async (idTrx) => {
  const response = await fetch(`${urlPagos}/${idTrx}/aprobar`, { method: 'PUT' })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return Messages.PAGO_APROBADO
}

export const rechazarPago = async (idTrx) => {
  const response = await fetch(`${urlPagos}/${idTrx}/rechazar`, { method: 'PUT' })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message)
  }

  return Messages.PAGO_RECHAZADO
}

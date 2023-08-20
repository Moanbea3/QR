import { defer } from 'react-router-dom';
import { ButtonAction } from '../constants/ButtonAction';
import { Messages } from '../constants/Messages';

const urlPagos = 'http://localhost:8080/api/pagos'

export const getDetallePago = async ({ params }) => {
  const response = await fetch(`${urlPagos}/${params.idTrx}`)
  if (!response.ok) throw response
  return defer({ detallePago: response.json() })
}

export const aprobarPago = async (idTrx) => {
  const response = await fetch(`${urlPagos}/${idTrx}/aprobar`, { method: 'PUT' })
  if (!response.ok) throw response
  return Messages.PAGO_APROBADO
}

export const rechazarPago = async (idTrx) => {
  const response = await fetch(`${urlPagos}/${idTrx}/rechazar`, { method: 'PUT' })
  if (!response.ok) throw response
  return Messages.PAGO_RECHAZADO
}

export const onSubmitPago = async ({ params, request }) => {
  const formData = await request.formData()
  const accion = formData.get('accion')
  let message;

  if (accion == ButtonAction.APROBAR) {
    message = await aprobarPago(params.idTrx)
  }

  if (accion == ButtonAction.RECHAZAR) {
    message = await rechazarPago(params.idTrx)
  }

  return { message }
}

import { defer } from 'react-router-dom';
import { ButtonAction } from '../constants/ButtonAction';
import { Messages } from '../constants/Messages';

const urlPagos = 'http://localhost:8080/api/pagos'

export const getDetallePago = async ({ params }) => {
  const response = await fetch(`${urlPagos}/${params.idTrx}`)
  if (!response.ok) throw response
  return defer({ detallePago: response.json() })
}

export const onSubmitPagoAction = async ({ params, request }) => {
  let url;
  let message;
  const formData = await request.formData()
  const accion = formData.get('accion')

  if (accion == ButtonAction.APROBAR) {
    url = `${urlPagos}/${params.idTrx}/aprobar`
    message = Messages.PAGO_APROBADO
  }

  if (accion == ButtonAction.RECHAZAR) {
    url = `${urlPagos}/${params.idTrx}/rechazar`
    message = Messages.PAGO_RECHAZADO
  }

  const { method } = request
  const response = await fetch(url, { method })
  if (!response.ok) throw response
  return { message }
}

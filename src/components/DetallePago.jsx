import { Suspense } from 'react'
import { Await, Form, Navigate, useActionData, useAsyncValue, useLoaderData } from 'react-router-dom'
import { ButtonAction } from '../constants/ButtonAction'
import { Loader } from './Loader'

export const DetallePago = () => {
  const { detallePago } = useLoaderData()

  return (
    <Suspense fallback={<Loader />}>
      <Await resolve={detallePago}>
        <InfoDetallePago />
      </Await>
    </Suspense>
  )
}

function InfoDetallePago() {
  const detallePago = useAsyncValue()
  const actionData = useActionData()

  return (
    <Form method="PUT">
      <div className="detalle w-50">
        <h2>Detalle de la compra</h2>
        <p>Nro. transacción: {detallePago.idTrx}</p>
        <p>Monto: $ {detallePago.monto}</p>
        <input type="hidden" name="monto" value={detallePago.monto} />
        <p>Fecha: {detallePago.fecha}</p>
      </div>
      <div className="botones">
        <button className="boton aceptar" type="submit" name="accion" value={ButtonAction.APROBAR}>Aprobar</button>
        <button className="boton rechazar" type="submit" name="accion" value={ButtonAction.RECHAZAR}>Rechazar</button>
      </div>
      { actionData && <Navigate to="/home/qr/resultado" replace state={actionData} /> }
    </Form>
  )
}

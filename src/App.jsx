import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DetallePago } from './components/DetallePago'
import { ErrorDetallePago } from './components/ErrorDetallePago'
import { ResultadoPago } from './components/ResultadoPago'
import { Scanner } from './components/Scanner'
import { getDetallePago, onSubmitPago } from './helpers/pagos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scanner />
  },
  {
    path: 'pagos',
    children: [
      {
        path: ':idTrx',
        element: <DetallePago />,
        errorElement: <ErrorDetallePago />,
        loader: getDetallePago,
        action: onSubmitPago
      },
      {
        path: 'resultado',
        element: <ResultadoPago />
      }
    ]
  }
])

export const App = () => {
  return (
    <>
      <h1>Pago QR</h1>
      <RouterProvider router={router} />
    </>
  )
}

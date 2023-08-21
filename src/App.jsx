import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DetallePago } from './components/DetallePago'
import { ErrorDetallePago } from './components/ErrorDetallePago'
import { ResultadoPago } from './components/ResultadoPago'
import { Scanner } from './components/Scanner'
import { getDetallePago, onSubmitPagoAction } from './helpers/pagos'
import { Login } from './components/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scanner />
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'pagos',
    children: [
      {
        path: ':idTrx',
        element: <DetallePago />,
        errorElement: <ErrorDetallePago />,
        loader: getDetallePago,
        action: onSubmitPagoAction
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

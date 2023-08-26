import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { DetallePago } from './components/DetallePago'
import { ErrorDetallePago } from './components/ErrorDetallePago'
import { Login } from './components/Login'
import { ResultadoPago } from './components/ResultadoPago'
import { Scanner } from './components/Scanner'
import { getDetallePago, onSubmitPagoAction } from './helpers/pagos'
import { Home } from './components/Home'
import { Saldo } from './components/Saldo'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: 'home',
    element: <Home />,
    children: [
      {
        path: '',
        element: <Saldo />
      },
      {
        path: 'qr',
        element: <Outlet />,
        children: [
          {
            path: '',
            element: <Scanner />
          },
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
    ]
  },
])

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

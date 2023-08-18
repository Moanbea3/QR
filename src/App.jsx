import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DetallePago } from './components/DetallePago'
import { ResultadoPago } from './components/ResultadoPago'
import { Scanner } from './components/Scanner'

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
        element: <DetallePago />
      },
      {
        path: 'result',
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

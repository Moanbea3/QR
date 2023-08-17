import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { DetallePago } from './components/DetallePago'
import { Scanner } from './components/Scanner'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Scanner />
  },
  {
    path: 'pagos/:idTrx',
    element: <DetallePago />
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

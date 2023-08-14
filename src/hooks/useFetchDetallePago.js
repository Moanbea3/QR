import { useEffect, useState } from 'react'
import { getDetallePago } from '../helpers/pagos'

export const useFetchDetallePago = (idTrx) => {
  const [detallePago, setDetallePago] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchDetallePago = async () => {
    setTimeout(async () => {
      const detalle = await getDetallePago(idTrx);
      setDetallePago(detalle)
      setIsLoading(false)
    }, 2000)
  }

  useEffect(() => { fetchDetallePago() }, [])

  return { detallePago, isLoading }
}
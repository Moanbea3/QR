import { useState, useEffect } from 'react'
import { Html5QrcodePlugin } from './plugins/Html5QrcodePlugin'
import { PaymentDetails } from './PaymentDetails'

export const Scanner = () => {
  const [scanResult, setScanResult] = useState(null)
  const [detallePago, setDetallePago] = useState(null)

  const onNewScanResult = (decodedText, decodedResult) => {
    setScanResult(decodedResult)
  }

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        if (scanResult) {
          const idTrx = scanResult.decodedText
          const pagoResponse = await fetch(`http://localhost:8080/pagos/${idTrx}`)

          if (!pagoResponse.ok) throw new Error('Error al llamar a la API')

          const pago = await pagoResponse.json()
          setDetallePago(pago)
        }
      } catch (error) {
        console.error('Error al llamar a la API:', error)
      }
    }

    fetchPaymentData()
  }, [scanResult])

  return (
    <div className="App">
      {detallePago ? (
        <PaymentDetails detallePago={detallePago} />
      ) : (
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      )}
    </div>
  )
}

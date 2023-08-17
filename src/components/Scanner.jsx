import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Html5QrcodePlugin } from './plugins/Html5QrcodePlugin'

export const Scanner = () => {
  const [idTrx, setIdTrx] = useState(null)
  const onNewScanResult = (decodedText) => setIdTrx(decodedText)

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      { idTrx && <Navigate to={`pagos/${idTrx}`} /> }
    </div>
  )
}

import { useState } from 'react'
import { DetallePago } from './DetallePago'
import { Html5QrcodePlugin } from './plugins/Html5QrcodePlugin'

export const Scanner = () => {
  const [idTrx, setIdTrx] = useState(null)

  const onNewScanResult = (decodedText, decodedResult) => {
    setIdTrx(decodedText)
  }

  return (
    <div className="App">
      {idTrx ? (
        <DetallePago idTrx={idTrx} />
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

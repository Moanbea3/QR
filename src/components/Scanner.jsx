import { useState } from 'react'
import { Html5QrcodePlugin } from './Html5QrcodePlugin';

export const Scanner = () => {
  const [scanResult, setScanResult] = useState(null)

  const onNewScanResult = (decodedText, decodedResult) => {
    setScanResult(decodedText)
  }

  return (
    <div className="App">
      {scanResult ? (
        <div>Success: {scanResult}</div>
      ) : (
        <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        />
      )}
    </div>)
}

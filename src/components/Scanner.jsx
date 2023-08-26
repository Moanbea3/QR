import { useNavigate } from 'react-router-dom'
import { Html5QrcodePlugin } from './plugins/Html5QrcodePlugin'

export const Scanner = () => {
  const navigate = useNavigate()

  const onNewScanResult = (idTrx) => navigate(idTrx, { relative: 'route' })

  return (
    <div className="App">
      <Html5QrcodePlugin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />
    </div>
  )
}

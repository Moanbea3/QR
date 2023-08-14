const urlPagos = 'http://localhost:8080/api/pagos';

export const getDetallePago = async (idTrx) => {
  try {
    const response = await fetch(`${urlPagos}/${idTrx}`)
    if (!response.ok) throw new Error('Error al llamar a la API')
    return await response.json()
  } catch (error) {
    console.error(`Error al llamar a la API: ${error}`)
  }
}

export const aprobarPago = async (idTrx) => {
  try {
    const response = await fetch(`${urlPagos}/${idTrx}/aprobar`, { method: 'PUT' })
    if (!response.ok) throw new Error('Error al confirmar el pago')
    return await response.json()
  } catch (error) {
    console.error(`Error al aprobar el pago: ${error}`)
  }
}

export const rechazarPago = async (idTrx) => {
  try {
    const response = await fetch(`${urlPagos}/${idTrx}/rechazar`, { method: 'PUT' })
    if (!response.ok) throw new Error('Error al rechazar el pago')
    return await response.json()
  } catch (error) {
    console.error(`Error al rechazar el pago: ${error}`)
  }
}

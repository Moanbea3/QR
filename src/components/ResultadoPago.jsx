export const ResultadoPago = ({ message = '', type = 'success' }) => {
  return (
    <p>
      <strong className={type}>{message}</strong>
    </p>
  )
}
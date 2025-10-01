const Warning = ({
  className = '',
  message,
  onClose,
}: {
  className?: string
  message: string
  onClose?: () => void
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div
        className={`${className} flex flex-col items-center justify-center text-center p-8 bg-amber-100/90 backdrop-blur-lg rounded-lg shadow-xl max-w-md mx-4`}
      >
        <p className="mb-4">{message}</p>
        <button onClick={onClose} className="!bg-yellow-200">
          Ok
        </button>
      </div>
    </div>
  )
}

export default Warning

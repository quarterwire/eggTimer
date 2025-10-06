import DOMPurify from 'dompurify'

const Warning = ({
  className = '',
  message,
  onClose,
}: {
  className?: string
  message: string
  onClose?: () => void
}) => {
  const cleanMessage = DOMPurify.sanitize(message.trim(), {
    ALLOWED_TAGS: [], // allow no tags
    ALLOWED_ATTR: [], // allow no attributes
  })

  if (!cleanMessage) {
    throw new Error('Message cannot be empty.')
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50"
      role="alert"
    >
      <div
        className={`${className} flex flex-col items-center justify-center text-center p-8 bg-amber-100/90 backdrop-blur-lg rounded-lg shadow-xl max-w-md mx-4`}
      >
        <p className="mb-4">{cleanMessage}</p>
        <button onClick={onClose} className="!bg-yellow-200">
          Ok
        </button>
      </div>
    </div>
  )
}

export default Warning

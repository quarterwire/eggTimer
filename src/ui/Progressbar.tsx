import React from 'react'

interface ImageProgressBarProps {
  progress: number // 0-100
  imageUrl: string
  width?: string
  height?: string
}

const ImageProgressBar: React.FC<ImageProgressBarProps> = ({
  progress,
  imageUrl,
  width = '64', // Tailwind w-64
  height = '64', // Tailwind h-64
}) => {
  return (
    <div
      className={`relative w-${width} h-${height} overflow-hidden rounded-md`}
    >
      <img
        src={imageUrl}
        alt="progress"
        className="absolute bottom-0 left-0 w-full h-full object-cover transition-[clip-path] duration-500 ease-in-out"
        style={{
          clipPath: `inset(${100 - progress}% 0 0 0)`,
        }}
      />
    </div>
  )
}

export default ImageProgressBar

import { JSX } from 'react'

const Screen = (props: {
  children: JSX.Element[] | JSX.Element
  className?: string
}) => {
  return (
    <section
      className={`${props.className} relative h-[100dvh] bg-[url('/background.webp')] bg-cover bg-center max-w-[640px] mx-auto flex flex-col items-center justify-center p-2`}
    >
      <div className="absolute inset-0 bg-amber-200/90 z-0"></div>
      {props.children}
    </section>
  )
}

export default Screen

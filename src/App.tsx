import { useState } from 'react'
import EggPicker from './components/eggPicker'
import Timer from './components/Timer'

function App() {
  const [start, setStart] = useState(false)

  return (
    <main className="relative h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-amber-50/90 z-0"></div>

      {/* EggPicker behind main content */}
      <EggPicker
        className={`absolute inset-0 transition-opacity duration-500 ${
          !start ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      />
      <Timer egg={{ id: 'soft', time: 4 }} />
      {/* Main content above EggPicker */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-5 z-10 ${
          start ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <h1 className="font-bold text-2xl">Let's time your egg!</h1>
        <img
          className="animate-spin-slow w-100 h-100"
          src="./egg.png"
          alt="egg"
        />
        <button
          className="px-4 py-2 bg-amber-200 rounded-lg shadow mt-4"
          onClick={() => setStart(true)}
        >
          Start
        </button>
      </div>
    </main>
  )
}

export default App

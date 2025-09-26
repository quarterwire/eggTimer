import './App.css'
import EggPicker from './components/eggPicker'

function App() {
  return (
    <main className="relative max-w-[448px] mx-auto h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      {/* Overlay to dim the background */}
      <div className="absolute inset-0 bg-amber-50/70"></div>

      {/* Content above overlay */}
      <div className="relative flex flex-col items-center justify-center gap-5 h-full z-10">
        <h1 className="font-bold">Let's time your egg !</h1>
        <img className="animate-spin-slow" src="./egg.png" alt="egg" />
        <button className="px-4 py-2 bg-amber-200 rounded-lg shadow">
          Start
        </button>
      </div>

      <EggPicker />
    </main>
  )
}

export default App

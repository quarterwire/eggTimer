import EggPicker from './components/eggPicker'
import Timer from './components/Timer'
import useAppStore from './store/useAppStore'

function App() {
  const view = useAppStore((state) => state.view)
  const setView = useAppStore((state) => state.setView)

  return (
    <main className="relative h-screen bg-[url('/background.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-amber-200/90 z-0"></div>

      {/* Timer */}
      {view === 'timer' && <Timer />}

      {/* EggPicker */}
      {view === 'menu' && <EggPicker />}

      {/* Start screen */}
      {view === 'start' && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
          <h1 className="font-bold text-2xl">Let's time your egg!</h1>
          <img className="animate-spin-slow w-124" src="./egg.png" alt="egg" />
          <button
            className="px-4 py-2 bg-amber-200 rounded-lg shadow mt-4"
            onClick={() => setView('menu')}
          >
            Start
          </button>
        </div>
      )}
    </main>
  )
}

export default App

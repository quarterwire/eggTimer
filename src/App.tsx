import EggPicker from './components/eggPicker'
import Timer from './components/Timer'
import useAppStore from './store/useAppStore'
import Screen from './ui/Screen'
import Start from './components/Start'

function App() {
  const view = useAppStore((state) => state.view)

  return (
    <Screen>
      <>{view === 'timer' && <Timer />}</>
      <>{view === 'menu' && <EggPicker />}</>
      <>{view === 'start' && <Start />}</>
    </Screen>
  )
}

export default App

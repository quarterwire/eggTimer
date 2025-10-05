import useAppStore from './store/useAppStore'
import Screen from './ui/Screen'
import { VIEWS } from './assets/constants'
function App() {
  const view = useAppStore((state) => state.view)
  const ViewComponent = VIEWS[view]

  return (
    <Screen>
      <>{ViewComponent && <ViewComponent />}</>
    </Screen>
  )
}

export default App

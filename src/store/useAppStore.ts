import { create } from 'zustand'
import { type EggType } from '../assets/constants'

export type View = 'start' | 'menu' | 'timer'

interface AppState {
  view: View
  setView: (view: View) => void
  selectedEgg: EggType | null
  targetDate: number | null
  setSelectedEgg: (egg: EggType) => void
  reset: () => void
}

const useAppStore = create<AppState>((set) => ({
  view: 'start',
  setView: (view) => set({ view }),
  selectedEgg: null,
  targetDate: null,
  setSelectedEgg: (egg) => {
    const totalSeconds = egg.time * 60
    const newDate = Date.now() + totalSeconds * 1000
    set({ selectedEgg: egg, targetDate: newDate, view: 'timer' })
  },
  reset: () => set({ view: 'start', selectedEgg: null, targetDate: null }),
}))

export default useAppStore

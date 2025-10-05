import EggPicker from '../components/eggPicker'
import Start from '../components/Start'
import Timer from '../components/Timer'

export type EggType = {
  id: string
  time: number
}

export const eggTypes: EggType[] = [
  {
    id: 'soft',
    time: 6,
  },
  {
    id: 'medium',
    time: 8,
  },
  {
    id: 'hard',
    time: 12,
  },
  {
    id: 'fried',
    time: 4,
  },
]

export const VIEWS = {
  timer: Timer,
  start: Start,
  menu: EggPicker,
}

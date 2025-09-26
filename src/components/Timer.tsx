import { type EggType } from '../assets/constants'
import Countdown from 'react-countdown'

interface TimerProps {
  egg: EggType
}

const Timer = ({ egg }: TimerProps) => {
  return (
    <div>
      <h1>Time left</h1>
      <div>
        <Countdown date={Date.now() + egg.time * 1000 * 60} />
      </div>
    </div>
  )
}

export default Timer

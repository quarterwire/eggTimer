import { type EggType } from '../assets/constants'
import Countdown, { zeroPad } from 'react-countdown'
import BentProgressBar from '../ui/Progressbar'

interface TimerProps {
  egg: EggType
}

const Timer = ({ egg }: TimerProps) => {
  const totalSeconds = egg.time * 60 // total duration in seconds

  const renderer = ({
    minutes,
    seconds,
    completed,
    total,
  }: {
    minutes: number
    seconds: number
    completed: boolean
    total: number // ms left
  }) => {
    if (completed) {
      return <div>Done!</div>
    }

    const elapsedSeconds = totalSeconds - Math.ceil(total / 1000)
    const progressPercent = (elapsedSeconds / totalSeconds) * 100

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="text-xl font-semibold">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
        <BentProgressBar
          progress={progressPercent} // 0 → 100%
          imageUrl="/icon.png"
          width="64"
          height="64"
        />
      </div>
    )
  }

  return (
    <div>
      <h1>Time left</h1>
      <Countdown
        precision={3}
        renderer={renderer}
        date={Date.now() + totalSeconds * 1000}
      />
    </div>
  )
}

export default Timer

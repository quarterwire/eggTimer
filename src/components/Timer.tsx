import { type EggType } from '../assets/constants'
import Countdown, { zeroPad } from 'react-countdown'

interface TimerProps {
  egg: EggType
}

const Timer = ({ egg }: TimerProps) => {
  const totalSeconds = egg.time * 60 // total duration in seconds

  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number
    seconds: number
    completed: boolean
    total: number // ms left
  }) => {
    if (completed) {
      return <div>Done!</div>
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl font-semibold text-amber-900">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
        <img src="./timer.svg" className="animate-bouncer w-80"></img>
      </div>
    )
  }

  return (
    <div className="mx-auto flex flex-col gap-20 justify-center h-full bg-[url('/background.jpg')] bg-center relative">
      <div className="absolute inset-0 bg-yellow-200/80 z-0"></div>
      <div className="z-10 gap-30 flex flex-col">
        <h1 className="text-center">Time left</h1>
        <Countdown
          precision={3}
          renderer={renderer}
          date={Date.now() + totalSeconds * 1000}
        />
      </div>
    </div>
  )
}

export default Timer

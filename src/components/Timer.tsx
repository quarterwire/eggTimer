import { useEffect } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import useAppStore from '../store/useAppStore'

const Timer = () => {
  const selectedEgg = useAppStore((state) => state.selectedEgg)
  const targetDate = useAppStore((state) => state.targetDate)
  const reset = useAppStore((state) => state.reset)

  // Redirect if timer somehow starts without an egg
  useEffect(() => {
    if (!selectedEgg || !targetDate) {
      reset()
    }
  }, [selectedEgg, targetDate, reset])

  if (!selectedEgg || !targetDate) return null

  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (completed) {
      return (
        <div className="flex flex-col items-center gap-10 h-full justify-center">
          <span className="text-6xl font-bold text-amber-900">Done!</span>
          <button onClick={reset}>Back to menu</button>
        </div>
      )
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl text-center">Time left</h1>
        <div className="text-5xl font-semibold text-amber-900">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
        <img src="./timer.svg" className="animate-bouncer w-80" />
        <button onClick={reset}>Reset</button>
      </div>
    )
  }

  return (
    <div className="relative h-full flex flex-col gap-20 justify-center bg-[url('/background.jpg')] bg-center">
      <div className="absolute inset-0 bg-amber-200/90 z-0" />
      <div className="z-10 flex flex-col gap-30">
        <Countdown
          key={targetDate} // ensure restart even for same egg
          date={targetDate}
          precision={3}
          renderer={renderer}
        />
      </div>
    </div>
  )
}

export default Timer

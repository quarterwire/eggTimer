import { useEffect, useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import useAppStore from '../store/useAppStore'
import Warning from '../ui/Warning'
import Screen from '../ui/Screen'
import { Image } from '@unpic/react'

const Timer = () => {
  const [warning, setWarning] = useState(true)
  const [countdownDate, setCountdownDate] = useState<number | null>(null)
  const selectedEgg = useAppStore((state) => state.selectedEgg)
  const targetDate = useAppStore((state) => state.targetDate)
  const reset = useAppStore((state) => state.reset)

  // Redirect if timer somehow starts without an egg
  useEffect(() => {
    if (!selectedEgg || !targetDate) {
      reset()
    }
  }, [selectedEgg, targetDate, reset])

  // Start countdown when warning is closed
  const handleWarningClose = () => {
    setWarning(false)
    // Recalculate target date from now
    if (selectedEgg) {
      setCountdownDate(Date.now() + selectedEgg.time * 60 * 1000)
    }
  }

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
        <Screen className="flex-col flex items-center justify-center">
          <span className="text-6xl font-bold text-amber-900 text-center">
            Done!
          </span>
          <button onClick={reset}>Back to menu</button>
        </Screen>
      )
    }

    return (
      <div className="flex flex-col items-center gap-2">
        <div className="text-5xl font-semibold text-amber-900">
          {zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
        <span className="animate-bouncer w-80">
          {' '}
          <Image
            layout="constrained"
            src="./timer.webp"
            width={600}
            height={600}
          />
        </span>
        <button onClick={reset}>Reset</button>
      </div>
    )
  }

  return (
    <>
      {warning && (
        <Warning
          message={
            selectedEgg.id == 'fried'
              ? '🥚 Make sure the pan is hot.'
              : '🥚 Make sure the water is boiling.'
          }
          onClose={handleWarningClose}
        />
      )}
      <Screen>
        <div className="z-10 flex flex-col gap-15">
          <h1 className="text-center">Time left</h1>

          {!warning && countdownDate && (
            <Countdown
              key={countdownDate}
              date={countdownDate}
              precision={3}
              renderer={renderer}
            />
          )}
        </div>
      </Screen>
    </>
  )
}

export default Timer

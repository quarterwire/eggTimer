import { eggTypes } from '../assets/constants'
import useAppStore from '../store/useAppStore'
import Screen from '../ui/Screen'
const EggPicker = ({ className = '' }) => {
  const setSelectedEgg = useAppStore((state) => state.setSelectedEgg)

  return (
    <Screen className={`mx-2 gap-15 ${className}`}>
      <div className="relative z-10 flex flex-col items-center gap-5 w-full">
        <h2 className="text-center font-bold text-2xl">
          How do you like <br /> your eggs?
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
          {eggTypes.map((egg) => (
            <div
              key={egg.id}
              className="flex flex-col items-center rounded-md bg-white/20 hover:bg-white/50 shadow-lg ring-1 ring-black/5 p-8 hover:ring-yellow-200 cursor-pointer"
              onClick={() => setSelectedEgg(egg)}
            >
              <img
                src={`/eggType/${egg.id}.webp`}
                loading="lazy"
                alt={egg.id !== 'fried' ? `${egg.id} boiled` : `${egg.id} eggs`}
                className="rounded-full aspect-square"
              />
              <span className="mt-2 capitalize text-center tracking-wide">
                {egg.id !== 'fried' ? `${egg.id} boiled` : `${egg.id} eggs`}
              </span>
              <span className="text-gray-500 text-xs">{egg.time} minutes</span>
            </div>
          ))}
        </div>
      </div>
    </Screen>
  )
}

export default EggPicker

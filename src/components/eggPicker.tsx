import { eggTypes } from '../assets/constants'

const EggPicker = ({ className = '' }) => {
  return (
    <section
      className={` mx-2 relative h-full flex flex-col items-center justify-center gap-20 bg-[url('/background.jpg')] bg-cover bg-center ${className} `}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-50/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-20 w-full ">
        <h2>
          How do you like <br /> your eggs?
        </h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 place-items-center">
          {eggTypes.map((egg) => (
            <div
              key={egg.id}
              className="flex flex-col items-center rounded-md bg-white/20 hover:bg-white/50 shadow-lg ring-1 ring-black/5 p-8 hover:ring-yellow-200"
            >
              <img
                src={`/eggType/${egg.id}.png`}
                alt={egg.id !== 'fried' ? `${egg.id} boiled` : `${egg.id}`}
                className="w-48 rounded-full aspect-square"
              />
              <span className="mt-2 capitalize text-center tracking-wide">
                {egg.id !== 'fried' ? `${egg.id} boiled` : `${egg.id} eggs`}
              </span>
              <span className="text-gray-500 text-xs">{egg.time} minutes</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EggPicker

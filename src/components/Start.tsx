import useAppStore from '../store/useAppStore'

const Start = () => {
  const setView = useAppStore((state) => state.setView)
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
      <h1 className="font-bold text-2xl">Let's time your egg!</h1>
      <img className="animate-spin-slow w-124" src="./egg.png" alt="egg" />
      <button
        className="px-4 py-2 bg-amber-200 rounded-lg shadow mt-4"
        onClick={() => setView('menu')}
      >
        Start
      </button>
    </div>
  )
}

export default Start

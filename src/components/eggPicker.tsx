const EggPicker = () => {
  return (
    <section className="max-w-lg mx-auto flex flex-col items-center justify-center gap-20">
      <h2>How do you like your eggs ?</h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-8 place-items-center">
        <div>Soft Boiled</div>
        <div>Medium-boiled</div>
        <div className="row-start-2">Hard-boiled</div>
        <div className="row-start-2">Fried</div>
      </div>
    </section>
  )
}

export default EggPicker

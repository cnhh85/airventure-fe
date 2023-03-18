function Filter() {
  //create filter layout with radio button, sort by price from low to high from high to low, sort by time from early to late and sort by time from late to early
  return (
    <div className="flex flex-col border space-y-5 divide-y-2 rounded-xl">
      <h2 className="px-8 pt-6 text-xl text-primary font-semibold">Sort</h2>
      <div className="flex flex-col space-y-3 px-8 py-6 text-slate-600 font-medium">
        <h2 className=" text-lg text-slate-500 font-semibold mb-1">by price</h2>

        <div className="">
          <label htmlFor="lowToHigh">
            <input type="radio" name="priceSort" id="lowToHigh" className="mr-4" />
            Low to High
          </label>
        </div>
        <div className="">
          <label htmlFor="highToLow">
            <input type="radio" name="priceSort" id="highToLow" className="mr-4" />
            High to Low
          </label>
        </div>
        <div className="">
          <label htmlFor="default">
            <input type="radio" name="priceSort" id="default" className="mr-4" defaultChecked />
            Default
          </label>
        </div>
      </div>
      <div className="flex flex-col space-y-3 px-8 py-6 text-slate-600 font-medium">
        <h2 className=" text-lg text-slate-500 font-semibold mb-1">by history</h2>

        <div className="">
          <label htmlFor="lowToHigh">
            <input type="radio" name="historySort" id="lowToHigh" className="mr-4" />
            Lasted to oldest
          </label>
        </div>
        <div className="">
          <label htmlFor="highToLow">
            <input type="radio" name="historySort" id="highToLow" className="mr-4" />
            Oldest to lasted
          </label>
        </div>
        <div className="">
          <label htmlFor="default">
            <input type="radio" name="historySort" id="default" className="mr-4" defaultChecked />
            Default
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filter

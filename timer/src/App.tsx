import InputTime from "./components/InputTime";

const App = () => {
  return (
    <div className="bg-slate-600 w-screen h-screen flex items-center justify-center">
      <div className="bg-slate-200 p-5 rounded-md flex flex-col gap-5">
        <h1 className="text-4xl text-slate-700 font-bold text-center">Timer</h1>
        <div className="flex gap-5">
          <InputTime placeholder="min"/>
          <InputTime placeholder="sec"/>
        </div>
        <button className="bg-slate-500 text-slate-200 p-1 rounded-md duration-75 hover:bg-slate-800">
          start
        </button>
      </div>
    </div>
  )
}

export default App

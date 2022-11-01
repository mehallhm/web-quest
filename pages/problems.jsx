import Navbar from "../components/navbar";
import ProblemSet from "../components/problemSet"

export default function Problem() {
  return (
    <div className="Set">
    <Navbar />
    <div className="mt-20 grid grid-cols-9 grid-rows-1">
      <div className="col-span-7 col-start-2">
        <ProblemSet />
      </div>
    </div>
  </div>
  )
}

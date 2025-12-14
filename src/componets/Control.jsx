import { useState } from "react"
import Physics from "./subjects/physics/physics"
import Chemist from "./subjects/chemist/chemist"
import Math from "./subjects/math/math"
import Mech from "./subjects/mech/mech"

const Control = () => {
  const [active, setActive] = useState(null)

  return (
<section >
  <div className="bg-[#03346E]/40  backdrop-blur-2xl cursor-pointer font-bold bg-opacity-25 border-2 border-[#03346E] text-[#6EACDA]
    mt-5 flex justify-center  mx-auto  sm:w-fit max-lg:w-fit px-1 text-sm rounded-lg items-center w-2xl  h-10  gap-5">
    <button
      onClick={() => setActive("chemistry")}
      className={`primary-btn ${active === "chemistry" ? " active-btn" : ""}`}
    >
      chemistry
    </button>
    <button
      onClick={() => setActive("math")}
      className={`primary-btn ${active === "math" ? "active-btn" : ""}`}
    >
      calculus
    </button>
    <button
      onClick={() => setActive("mechanics")}
      className={`primary-btn ${active === "mechanics" ? "active-btn" : ""}`}
    >
      mechanics
    </button>
    <button
      onClick={() => setActive("Physics")}
      className={`primary-btn ${active === "Physics" ? "active-btn" : ""}`}
    >
      Physics
    </button>
  </div>
  {/* عرض المحتوى حسب الزرار */}
  {active === "chemistry" && <Chemist/>}
  {active === "math" && <Math/>}
  {active === "mechanics" && <Mech/>}
  {active === "Physics" && <Physics/>}
</section>
  )
}

export default Control

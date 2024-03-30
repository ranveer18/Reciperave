import { Link } from "react-router-dom"
import confirm from "../images/confirm.svg"

const Confirm = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen relative">
        <img src={confirm} alt="" />
        <div className="absolute top-2/3 left-1/3 flex flex-col items-center justify-center gap-1">
          <p className="font-semibold text-xl">Your Recipe is confirmed!</p>
          <p className="text-xs ">Thanks for sharing recipe</p>
          <Link to="/">
            <button className="cursor-pointer bg-[#FFBC3B] h-8 w-32 rounded-full">Done</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Confirm

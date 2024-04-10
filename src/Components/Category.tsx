import pizza from "../images/pizza.jpg"
import { IoTimerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const Category = () => {
  return (
    <>
      <div className="category pt-32">
        <h1 className="text-5xl font-medium flex justify-center items-center my-5 text-[#03383F]">Our Category</h1>
        <div className="category-item-conatiner flex justify-center items-center gap-10 px-20 py-10">
          <div className="category-item flex gap-1 flex-col justify-center items-center text-[#03383F]">
            <img src={pizza} alt="" className="h-36 w-36 rounded-full " />
            <h2 className="text-xl">Italy Style</h2>
            <div className="flex items-start flex-col">

              <h6 className="text-xs flex  gap-1"><IoTimerOutline />25 Minutes</h6>
              <h6 className="text-xs flex items-start gap-1"><CiUser />4 serving</h6>
            </div>
          </div>
          <div className="category-item flex gap-1 flex-col justify-center items-center text-[#03383F]">
            <img src={pizza} alt="" className="h-36 w-36 rounded-full " />
            <h2 className="text-xl">Italy Style</h2>
            <div className="flex items-start flex-col">

              <h6 className="text-xs flex  gap-1"><IoTimerOutline />25 Minutes</h6>
              <h6 className="text-xs flex items-start gap-1"><CiUser />4 serving</h6>
            </div>
          </div>
          <div className="category-item flex gap-1 flex-col justify-center items-center text-[#03383F]">
            <img src={pizza} alt="" className="h-36 w-36 rounded-full " />
            <h2 className="text-xl">Italy Style</h2>
            <div className="flex items-start flex-col">

              <h6 className="text-xs flex  gap-1"><IoTimerOutline />25 Minutes</h6>
              <h6 className="text-xs flex items-start gap-1"><CiUser />4 serving</h6>
            </div>
          </div>
          <div className="category-item flex gap-1 flex-col justify-center items-center text-[#03383F]">
            <img src={pizza} alt="" className="h-36 w-36 rounded-full " />
            <h2 className="text-xl">Italy Style</h2>
            <div className="flex items-start flex-col">

              <h6 className="text-xs flex  gap-1"><IoTimerOutline />25 Minutes</h6>
              <h6 className="text-xs flex items-start gap-1"><CiUser />4 serving</h6>
            </div>
          </div>
          <div className="category-item flex gap-1 flex-col justify-center items-center text-[#03383F]">
            <img src={pizza} alt="" className="h-36 w-36 rounded-full " />
            <h2 className="text-xl">Italy Style</h2>
            <div className="flex items-start flex-col">

              <h6 className="text-xs flex  gap-1"><IoTimerOutline />25 Minutes</h6>
              <h6 className="text-xs flex items-start gap-1"><CiUser />4 serving</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Category

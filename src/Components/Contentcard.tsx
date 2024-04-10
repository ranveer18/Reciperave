import { IoTimerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import cardphoto from "../images/cardphoto.svg"
const Contentcard = () => {
  return (
    <>
      <div className="flex flex-row gap-x-40 gap-y-20 my-16 flex-wrap justify-center items-center">
        <div className="w-96 h-auto flex justify-center items-center flex-col">
          <div className="image-container w-96 h-96 rounded bg-[#FDF2cc] flex justify-center items-center hover:rounded-3xl">
            <img src={cardphoto} alt="" className="w-96 h-96 rounded" />
          </div>
          <div className="card-info text-[#03383F] flex gap-2 flex-col">
            <h2 className="text-2xl">Name</h2>
            <h4 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor!</h4>
            <div className="flex flex-row justify-start gap-5">
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><IoTimerOutline />25 Minutes</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><CiUser />4 Serving</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><GiNetworkBars />Easy making</div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="w-96 h-auto flex justify-center items-center flex-col">
          <div className="image-container w-96 h-96 rounded bg-[#FDF2cc] flex justify-center items-center hover:rounded-3xl">
            <img src={cardphoto} alt="" className="w-96 h-96 rounded" />
          </div>
          <div className="card-info text-[#03383F] flex gap-2 flex-col">
            <h2 className="text-2xl">Name</h2>
            <h4 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor!</h4>
            <div className="flex flex-row justify-start gap-5">
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><IoTimerOutline />25 Minutes</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><CiUser />4 Serving</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><GiNetworkBars />Easy making</div>
            </div>
          </div>
        </div><div className="w-96 h-auto flex justify-center items-center flex-col">
          <div className="image-container w-96 h-96 rounded bg-[#FDF2cc] flex justify-center items-center hover:rounded-3xl">
            <img src={cardphoto} alt="" className="w-96 h-96 rounded" />
          </div>
          <div className="card-info text-[#03383F] flex gap-2 flex-col">
            <h2 className="text-2xl">Name</h2>
            <h4 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor!</h4>
            <div className="flex flex-row justify-start gap-5">
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><IoTimerOutline />25 Minutes</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><CiUser />4 Serving</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><GiNetworkBars />Easy making</div>
            </div>
          </div>
        </div><div className="w-96 h-auto flex justify-center items-center flex-col">
          <div className="image-container w-96 h-96 rounded bg-[#FDF2cc] flex justify-center items-center hover:rounded-3xl">
            <img src={cardphoto} alt="" className="w-96 h-96 rounded" />
          </div>
          <div className="card-info text-[#03383F] flex gap-2 flex-col">
            <h2 className="text-2xl">Name</h2>
            <h4 className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dolor!</h4>
            <div className="flex flex-row justify-start gap-5">
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><IoTimerOutline />25 Minutes</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><CiUser />4 Serving</div>
              <div className="flex flex-row justify-center items-center bg-[#FDF2cc] px-2 py-1 rounded text-xs"><GiNetworkBars />Easy making</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contentcard

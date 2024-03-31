import ingredient from "../images/ingredients.jpg"
import { PiKnife } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiCookingPot } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import method from "../images/method.svg"

const Singlerecipe = () => {
    return (
        <>
            <div className="flex flex-col">
                <div className="w-full bg-[#FDF2cc] h-screen flex">
                    <div className="w-2/4 h-full relative">
                        <img src={ingredient} className=" h-5/6 w-5/6 absolute top-48 left-36" alt="" />
                    </div>
                    <div className="w-2/4 h-full py-72 px-40 flex flex-col gap-7 justify-center">
                        <button className="cursor-pointer h-8 py-4 flex items-center justify-center w-32 rounded bg-[#FFBC3B] font-semibold text-[#633d2d]">Breakfast</button>
                        <p className="name text-[#03383F] font-bold text-4xl">The Rowse Breakfast chokoshi</p>
                        <p className="ptime flex gap-2 items-center"> <PiKnife /> 10 min to prepare</p>
                        <p className="ctime flex gap-2 items-center"><PiCookingPot />20 min to cook</p>
                        <p className="serve flex gap-2 items-center"><CiUser /> serve 2 people</p>
                    </div>
                </div>
                <div className="w-full bg-[#FEF8E6] h-screen flex text-[#03383F] ">
                    <div className="w-2/4 h-full px-20 pt-60 pb-10 flex flex-col gap-10">
                        <h1 className="text-4xl font-bold text-[#03383F]">About</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem accusantium soluta dolores, neque magni totam quos accusamus maiores facere eveniet odio ipsum ea aspernatur. Fuga dicta tempore saepe, totam dolores unde cupiditate laborum!</p>
                        <div className="flex gap-5">
                            <div className="bg-[#CDD7D9] h-12 w-12 flex justify-center items-center rounded-full">
                                <CiUser className="text-[#03383F] font-bold text-xl" />
                            </div>
                            <div className="flex justify-center flex-col">
                                <p className="text-xs">Recipe by:</p>
                                <p className="font-semibold">Tony stark</p>
                            </div>

                        </div>
                        <div className="flex gap-5 mt-10">
                            <button className=" flex items-center justify-center gap-2 cursor-pointer text-[#633d2d] border border-[#03383F] h-8 w-32 rounded-full hover:bg-[#FDF2cc] hover:border-0"><IoPrintOutline />Print</button>
                            <button className=" flex items-center justify-center gap-2 cursor-pointer text-[#633d2d] border border-[#03383F] h-8 w-32 rounded-full hover:bg-[#FDF2cc] hover:border-0"><FaLink />Copy Link</button>
                        </div>
                        <div className="flex mt-10 h-10 gap-4 items-center">
                            <p>Share Recipe On:</p>
                            <div className="flex items-center justify-center gap-2">

                                <FiYoutube className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" />
                                <FiInstagram className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" />
                                <FaXTwitter className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" />
                            </div>
                        </div>
                    </div>
                    <div className="w-2/4 h-full px-20 pt-60 pb-10 flex flex-col gap-5">
                        <h1 className="text-4xl font-bold text-[#03383F]">Ingredients</h1>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4">
                                <input type="checkbox" name="" id="" />
                                <h4>4 Bread</h4>
                            </div>
                            <div className="flex gap-4">
                                <input type="checkbox" name="" id="" />
                                <h4>1/2 Cup Milk</h4>
                            </div>
                            <div className="flex gap-1 pt-10">
                                <span className="w-20 text-[#633d2d]">Top Tip:</span>
                                <p>Tick Off The Item you've Already Got, So You Can Quickly See What's Left To Buy</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#fbfaf4] h-screen flex flex-col text-[#03383F] py-20 px-60 gap-20 ">
                    <h1 className="text-4xl font-bold text-[#03383F]">Methods</h1>
                    <div className="flex items-center gap-40">
                        <img src={method} className="w-40 h-40" alt="" />
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Step 1</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis!</p>
                        </div>

                    </div>
                    <div className="flex items-center gap-40 flex-row-reverse">
                        <img src={method} className="w-40 h-40" alt="" />
                        <div className="flex flex-col gap-3">
                            <span className="text-xl font-semibold">Step 2</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, perferendis!</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Singlerecipe

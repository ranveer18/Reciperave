import ingredient from "../images/ingredients.jpg"
import { PiKnife } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { PiCookingPot } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FiYoutube, FiInstagram } from "react-icons/fi";
import method from "../images/method.svg"
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import copy from "copy-to-clipboard";
import { useReactToPrint } from "react-to-print";
import Loader from "./Loader";

const Singlerecipe = () => {



    const { id } = useParams();
    const [recipe, setRecipe] = useState<any>(null);
    const [copied, setCopied] = useState(false);
    const [isLoding, setIsLodingd] = useState(true);
    const [checkedItems, setCheckedItems] = useState<any>({});

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`${apiUrl}/recipe/${id}`);

                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setRecipe(data);
                setIsLodingd(false);

            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, []);

    const copyToClipboard = () => {
        let link = `${apiUrl}${id}`
        let isCopy = copy(link);
        if (isCopy) {
            setCopied(true)

        }
    };


    const handleCheckboxChange = (id: string) => {
        setCheckedItems((prevState: any) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const Componentref = useRef<any>();
    const handlePrint = useReactToPrint({
        content: () => Componentref.current,
        documentTitle: 'recipe',
        onAfterPrint: () => alert('Print Success')
    })

    const shareToInstagram = () => {
        window.open('https://www.instagram.com/');
    };

    const shareToTwitter = () => {
        window.open('https://twitter.com/');
    };

    const shareToYouTube = () => {
        window.open('https://www.youtube.com/');
    };


    return (
        <>
            {isLoding ? <Loader /> : (
                <div className="flex flex-col" ref={Componentref}>
                    <div className="w-full bg-[#FDF2cc] h-screen flex max-[500px]:flex-col">
                        <div className="w-2/4 h-full relative  max-[500px]:w-full">
                            <img src={ingredient} className=" h-5/6 w-5/6 absolute top-48 left-20 max-[786px]:h-4/6 max-[786px]:w-5/6 max-[786px]:relative max-[500px]:absoute max-[500px]:h-screen max-[500px]:w-full max-[500px]:top-0 max-[500px]:left-0  max-[500px]:opacity-20" alt="" />
                        </div>
                        <div className="w-2/4 h-full py-72 px-20 flex flex-col gap-7 justify-center max-[786px]:px-20 max-[500px]:px-10 max-[500px]:py-0 max-[500px]:w-full  max-[500px]:z-10  max-[500px]:absolute">
                            <button className="cursor-pointer h-8 py-4 flex items-center justify-center w-32 rounded bg-[#FFBC3B] font-semibold text-[#633d2d]">Breakfast</button>
                            <p className="name text-[#03383F] font-bold text-4xl">{recipe.title}</p>
                            <p className="ptime flex gap-2 items-center"> <PiKnife /> {recipe.preprationtimeHRS} Hrs {recipe.preprationtimeMINS}    min to prepare</p>
                            <p className="ctime flex gap-2 items-center"><PiCookingPot />{recipe.cooktimeHRS} Hrs {recipe.cooktimeMINS} to cook</p>
                            <p className="serve flex gap-2 items-center"><CiUser /> serve {recipe.serve} people</p>
                        </div>
                    </div>
                    <div className="w-full bg-[#FEF8E6] h-auto flex text-[#03383F] max-[500px]:flex-col ">
                        <div className="w-2/4 h-full px-20 pt-40 pb-10 flex flex-col gap-10 max-[786px]:px-10 max-[786px]:pt-20 max-[500px]:w-full">
                            <h1 className="text-4xl font-bold text-[#03383F]">About</h1>
                            <p>{recipe.desc}</p>
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
                                <button className=" flex items-center justify-center gap-2 cursor-pointer text-[#633d2d] border border-[#03383F] h-8 w-32 rounded-full hover:bg-[#FDF2cc] hover:border-0" onClick={handlePrint}><IoPrintOutline />Print</button>
                                <button className={copied ? "flex items-center justify-center gap-2 cursor-pointer text-[#633d2d] h-8 w-32  rounded-full bg-[#FDF2cc] hover:bg-[#FDF2cc] hover:border-0" : "flex items-center justify-center gap-2 cursor-pointer text-[#633d2d] border border-[#03383F] h-8 w-32  rounded-full hover:bg-[#FDF2cc] hover:border-0"} onClick={copyToClipboard}><FaLink /> {copied ? "Link copied" : "Copy Link"}</button>

                            </div>
                            <div className="flex mt-10 h-10 gap-4 items-center  max-[500px]:mt-0">
                                <p>Share Recipe On:</p>
                                <div className="flex items-center justify-center gap-2">
                                    <FiYoutube className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" onClick={shareToYouTube} />
                                    <FiInstagram className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" onClick={shareToInstagram} />
                                    <FaXTwitter className="h-5 w-5 cursor-pointer hover:text-[#708E8E]" onClick={shareToTwitter} />
                                </div>
                            </div>
                        </div>
                        <div className="w-2/4 h-full px-20 pt-40 pb-10 flex flex-col gap-5 max-[786px]:px-10 max-[786px]:pt-10 max-[500px]:w-full">
                            <h1 className="text-4xl font-bold text-[#03383F]">Ingredients</h1>
                            <div className="flex flex-col gap-3">

                                {recipe.ingredients.map((event: any, index: any) => {
                                    return (
                                        <div className="flex gap-4" key={index}>
                                            <label className="flex gap-3" htmlFor={`checkbox${index}`}
                                            >
                                                <input type="checkbox" name="" id={`checkbox${index}`}
                                                    checked={checkedItems[`checkbox${index}`] || false}
                                                    onChange={() => handleCheckboxChange(`checkbox${index}`)}
                                                />
                                                {event.qty} {event.measurement} {event.ingredientsItem}</label>
                                        </div>
                                    )
                                })}

                                <div className="flex gap-1 pt-10">
                                    <span className="w-20 text-[#633d2d]">Top Tip:</span>
                                    <p>Tick Off The Item you've Already Got, So You Can Quickly See What's Left To Buy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-[#fbfaf4] h-auto flex flex-col text-[#03383F] py-20 px-40 gap-20 max-[786px]:px-16 max-[500px]:h-auto max-[500px]:px-5">
                        <h1 className="text-4xl font-bold text-[#03383F]">Methods</h1>
                        {recipe.instructions.map((event: any, index: any) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div className={`flex items-center justify-evenly gap-40 max-[500px]:gap-5 ${isEven ? 'flex-row-reverse' : ''
                                    }`} key={index}>
                                    <img src={method} className="w-40 h-40 max-[500px]:w-16" alt="" />
                                    <div className="flex flex-col gap-3">
                                        <span className="text-xl font-semibold">Step {index + 1}</span>
                                        <p>{event.step}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default Singlerecipe

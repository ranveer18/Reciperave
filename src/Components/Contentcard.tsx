import { IoTimerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import cardphoto from "../images/cardphoto.svg"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Contentcard = () => {
  const [recipe, setRecipe] = useState<any>([]);


  const apiUrl = 'http://localhost:5050/api/v1';

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${apiUrl}/recipe`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const data = await response.json();
        setRecipe(data);

      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, []);
  return (
    <>
      <div className="flex flex-row gap-x-40 gap-y-20 my-16 flex-wrap justify-center items-center">
        {recipe.map((event: any, index: any) => {
          return (
            <div className="w-96 h-auto flex justify-center items-center flex-col" key={index}>
              <div className="image-container w-96 h-96 rounded bg-[#FDF2cc] flex justify-center items-center hover:rounded-3xl max-[500px]:w-72 max-[786px]:h-72">
                <Link to={`/Reciperave/${event._id}`}>
                  <img src={cardphoto} alt="" className="w-96 h-96 rounded max-[500px]:w-72 max-[786px]:h-72" />
                </Link>
              </div>
              <div className="card-info text-[#03383F] flex gap-2 flex-col max-[500px]:w-72">
                <h2 className="text-2xl">{event.title}</h2>
                <h4 className="text-xs">{event.desc}</h4>
                <div className="flex flex-row justify-start gap-2">
                  <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1  px-1 py-1 rounded text-xs"><IoTimerOutline />{event.cooktimeHRS} hrs {event.cooktimeMINS}min</div>
                  <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1 px-1 py-1 rounded text-xs"><CiUser />{event.serve} Serving</div>
                  <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1 px-1 py-1 rounded text-xs"><GiNetworkBars />Easy making</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Contentcard

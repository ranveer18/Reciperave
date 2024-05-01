
import { IoTimerOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GiNetworkBars } from "react-icons/gi";
import cardphoto from "../images/cardphoto.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "./Loader";
import useDebounce from './useDebounce';



const Contentcard = ({ searchQuery }: any) => {
  const [recipe, setRecipe] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 10;
  // const apiUrl = import.meta.env.VITE_API_URL;
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const apiUrl = "https://reciperave.onrender.com/api/v1"
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`${apiUrl}/recipe`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe');
        }
        const data = await response.json();
        setRecipe(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };

    fetchRecipe();
  }, []);

  useEffect(() => {
    const filterSearchResults = async () => {
      if (debouncedSearchQuery) {
        setIsLoading(true);

        try {
          const response = await fetch(`${apiUrl}/recipe`);
          if (!response.ok) {
            throw new Error('Failed to fetch search results');
          }
          const data = await response.json();

          const filteredData = data.filter((item: any) =>
            item.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
          );
          setSearchResults(filteredData);
        } catch (error) {
          console.error('Error fetching search results:', error);
        }

        setIsLoading(false);
        setCurrentPage(1);
      } else {
        setSearchResults([]);
      }
    };

    filterSearchResults();
  }, [debouncedSearchQuery]);

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = (debouncedSearchQuery ? searchResults : recipe).slice(indexOfFirstRecipe, indexOfLastRecipe);


  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    const totalRecipes = debouncedSearchQuery ? searchResults.length : recipe.length;
    if (indexOfLastRecipe < totalRecipes) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-row gap-x-40 gap-y-20 my-16 flex-wrap justify-center items-center">
          {currentRecipes.length === 0 && debouncedSearchQuery ? (
            <div className="text-center text-gray-600 mt-4">No recipes found</div>
          ) : (
            <>
              {currentRecipes.map((event: any, index: any) => (
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
                      <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1  px-1 py-1 rounded text-xs">
                        <IoTimerOutline />
                        {event.cooktimeHRS} hrs {event.cooktimeMINS} min
                      </div>
                      <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1 px-1 py-1 rounded text-xs">
                        <CiUser />
                        {event.serve} Serving
                      </div>
                      <div className="flex flex-row justify-center items-center bg-[#FDF2cc] gap-1 px-1 py-1 rounded text-xs">
                        <GiNetworkBars />
                        Easy making
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {!debouncedSearchQuery && (
        <div className="flex justify-center m-4">
          <button
            className={`bg-[#FFBC3B] hover:bg-[#F9972F] text-white font-bold w-28 py-2 px-4 rounded mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            onClick={nextPage}
            className={`bg-[#FFBC3B] hover:bg-[#F9972F] text-white font-bold py-2 w-28 px-4 rounded ml-2 ${indexOfLastRecipe >= (debouncedSearchQuery ? searchResults.length : recipe.length) ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={indexOfLastRecipe >= (debouncedSearchQuery ? searchResults.length : recipe.length)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Contentcard;


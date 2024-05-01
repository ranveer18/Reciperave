// UserPage.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import { LuUpload } from "react-icons/lu";
import cardphoto from "../images/cardphoto.svg"
import axios from 'axios';
import Loader from '../Components/Loader';



const UserPage: React.FC = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [userData, setUserData] = useState<any>({})
    const [recipeData, setRecipeData] = useState<any>({})
    const [singleuserData, setSingleUserData] = useState<any>([])
    const [userid, setUserId] = useState<any>("");
    const [isLoading, setIsLoading] = useState(true);

    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://reciperave.onrender.com/api/v1"

    const user = {
        bio: 'A passionate cook who loves sharing recipes with the world!',
        avatarUrl: 'https://via.placeholder.com/150', // Placeholder image URL

    };
    useEffect(() => {
        const checkLogin = async () => {
            try {
                const res = await fetch(`${apiUrl}/admin`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',

                });
                const data = await res.json();

                setUserData(data);
                setUserId(data._id)

            } catch (error) {
                navigate("/");
                console.log(error);
            }
        }
        checkLogin();
    }, [])
    useEffect(() => {
        if (userid) {
            verifyUser();
        }
    }, [userid]);
    useEffect(() => {
        verifyUser();
    }, []);
    const verifyUser = async () => {
        try {
            const ress = await fetch(`${apiUrl}/recipe/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',

            });
            const data = await ress.json();

            const filteredData = data.filter((item: any) => item.userId === userid)
            setRecipeData(filteredData);
            setSingleUserData(filteredData[0])
            setIsLoading(false);


            if (ress.status === 401 || !data) {
                const error = new Error();
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };




    const handleEditRecipe = (recipeId: string, name: string) => {
        navigate(`/Reciperave/${name}/editrecipe/${recipeId}`)
    };
    const deleteRecipe = async (id: any) => {
        try {
            const response = await axios.delete(`${apiUrl}/deleterecipes/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error deleting recipe with ID ${id}:`, error);
            throw error;
        }
    };
    const handleDeleteRecipe = async (recipeId: string) => {
        // const handleDeleteRecipe = async (id) => {
        try {
            console.log(`delete recipe ${recipeId}`);
            await deleteRecipe(recipeId);
            setRecipeData(recipeData.filter((recipe: any) => {
                console.log(recipe._id)
                return recipe._id !== recipeId
            }

            ));
        } catch (error) {
            console.error(`Error deleting recipe with ID ${recipeId}:`, error);
        }
    };

    const handleUploadProfilePicture = () => {
        if (selectedFile) {
            console.log('Uploading profile picture:', selectedFile);
            setSelectedFile(null);
            setPreviewImage(null);
        }
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
            setSelectedFile(file);
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex flex-col w-full bg-[#FDF2cc] h-auto py-28 items-center text-[#03383F]">
                <div className="flex flex-col items-center">
                    <div className="relative">
                        <img
                            src={previewImage || user.avatarUrl}
                            alt="User Avatar"
                            className="h-28 w-28 rounded-full"
                        />
                        <span onChange={handleFileInputChange}
                            className='absolute  cursor-pointer w-28 h-auto  bottom-5 opacity-80  z-1 flex flex-col items-center text-xs text-[#333]'>

                            {previewImage ? "" : <LuUpload />}
                        </span>
                        <input
                            type="file"
                            accept="image/*"

                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            onChange={handleFileInputChange}
                        />
                    </div>

                    <h1 className="text-2xl font-semibold mt-4">{userData.name}</h1>
                    <p className="text-gray-600">{userData.email}</p>
                    <p className="text-gray-600">Your Recipe: {recipeData.length}</p>
                </div>
                <div className="mt-8">
                    <h2 className="text-lg font-semibold">Bio</h2>
                    <p className="mt-2">{user.bio}</p>
                </div>
                <button
                    onClick={handleUploadProfilePicture}
                    disabled={!selectedFile}
                    className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
                >
                    <span>Save Profile</span>
                </button>
                <div className="m-8">
                    {/* <h2 className="text-lg font-semibold">Your Recipes</h2> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 ">
                        {isLoading ? <Loader /> :
                            (
                                Array.isArray(recipeData) && recipeData.map((recipe: any) => (<div key={recipe._id} className="bg-[#FEF8E6] rounded-lg shadow-md p-4">
                                    <img
                                        src={cardphoto}
                                        alt={recipe.title}
                                        className="w-full h-40 object-cover rounded-md mb-4"
                                    />


                                    <h3 className="text-lg font-semibold">{recipe.title}</h3>
                                    <p className="text-gray-600">{recipe.desc}</p>
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            onClick={() => handleEditRecipe(recipe._id, singleuserData.userName)}
                                            className=" hover:bg-blue-500 hover:text-[#fff] border border-blue-500 font-bold h-8 w-20  rounded mr-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteRecipe(recipe._id)}
                                            className="hover:bg-red-700 hover:text-[#fff] border border-red -500 font-bold h-8 w-20 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                ))
                            )
                        }
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default UserPage;

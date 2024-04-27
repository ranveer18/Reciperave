import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import EditRecipe from "../Components/EditRecipe"
import { useEffect } from "react"

import { useNavigate } from "react-router-dom";

const EditrecipePage = () => {
    const verifyUser = async () => {
        const navigate = useNavigate();

        const apiUrl = 'http://localhost:5050/api/v1/admin';

        try {
            const ress = await fetch(apiUrl, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',

            });
            const data = await ress.json();


            if (ress.status === 401 || !data) {
                const error = new Error();
                console.log(error);
            }
        } catch (error) {
            navigate("/Reciperave");
            console.log(error);
        }
    };
    useEffect(() => {
        verifyUser();
    }, []);
    return (
        <>
            <Navbar />
            <EditRecipe />
            <Footer />
        </>
    )
}

export default EditrecipePage;

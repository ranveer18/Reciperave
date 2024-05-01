import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
const Logout = () => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://reciperave.onrender.com/api/v1"


    const navigate = useNavigate();
    useEffect(() => {
        fetch(`${apiUrl}/logout`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            credentials: "include",
        })
            .then((res) => {
                navigate("/Reciperave");
                if (res.status !== 200) {
                    console.log("error");

                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return <>
        <Loader />
    </>;
};

export default Logout;

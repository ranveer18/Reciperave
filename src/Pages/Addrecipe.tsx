
import Form from "../Components/Form"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const Addrecipe = () => {
  const [userData, setUserData] = useState<any>("")
  const navigate = useNavigate();

  const verifyUser = async () => {
    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://reciperave.onrender.com/api/v1"


    try {
      const ress = await fetch(`${apiUrl}/admin`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',

      });
      const data = await ress.json();
      setUserData(data)

      if (ress.status === 401 || !data) {
        const error = new Error();
        console.log(error);
      }
    } catch (error) {
      navigate("/");
      console.log(error);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <>
      <Navbar />
      <Form name={userData.name} email={userData.email} id={userData._id} />
      <Footer />
    </>
  )
}

export default Addrecipe


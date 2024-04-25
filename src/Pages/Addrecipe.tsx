
import Form from "../Components/Form"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Addrecipe = () => {
  const navigate = useNavigate();

  const verifyUser = async () => {
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
      console.log(data);

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
  });
  return (
    <>
      <Navbar />
      <Form />
      <Footer />
    </>
  )
}

export default Addrecipe


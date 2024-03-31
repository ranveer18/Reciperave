import Category from "../Components/Category"
import Contentcard from "../Components/Contentcard"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Tagbuttom from "../Components/Tagbuttom"
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <>
      <Navbar />
      <Category />
      <Tagbuttom />
      <Link to="/id">
        <Contentcard />
      </Link>
      <Footer />
    </>
  )
}

export default Home

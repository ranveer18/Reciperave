import { FaSearch } from "react-icons/fa";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar flex py-3" >
        <div className="logo cursor-pointer">
            <img src={logo} alt="" className="h-16" />
        </div>
        <ul className="flex gap-7 cursor-pointer">
            <li>Recipie</li>
            <li>Categories</li>
            <li>Popular</li>
            <li>Tip & Tools</li>
            <li>Diet</li>
        </ul>
        <div className="search border-2 rounded flex items-center gap-4 px-2 py-1">
            <FaSearch />
            <input type="text" name="" id="" placeholder="Search Your Recipe" className="focus:outline-none text-sm h-6" />
        </div>
        <Link to="/addrecipe">
        <button className="cursor-pointer bg-[#FFBC3B] h-8 w-32 rounded"> + Add Recipe</button>
        </Link>
      </nav>
    </> 
  )
}

export default Navbar;

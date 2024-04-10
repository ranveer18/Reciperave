import { FaSearch } from "react-icons/fa";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            if (window.scrollY > 50) {
                if (navRef.current) {
                    navRef.current.style.height = "70px";
                    navRef.current.style.background = "#fbfaf4";
                    navRef.current.style.boxShadow = "0px 5px 10px #33333333";
                }
            }
            else {
                if (navRef.current) {
                    navRef.current.style.height = "70px";
                    navRef.current.style.background = "inherit";
                    navRef.current.style.boxShadow = "0 0 0 #fff";
                }
            }
        })
    }, [])
    return (
        <>
            {/* fbfaf4 */}
            <nav className="navbar flex py-3 fixed w-full h-16 " ref={navRef}>
                <div className="logo cursor-pointer">
                    <img src={logo} alt="" className="h-16" />
                </div>
                <ul className="flex gap-7 cursor-pointer">
                    <li>
                        <Link to="/">
                            Recipie
                        </Link>
                    </li>
                    <li>Categories</li>
                    <li>Popular</li>
                    <li>Tip & Tools</li>
                    <li>Diet</li>
                </ul>
                <div className="search border-2 rounded flex items-center gap-4 px-2 py-1">
                    <FaSearch />
                    <input type="text" name="" id="" placeholder="Search Your Recipe" className="focus:outline-none text-sm h-6" />
                </div>
                <Link to="/login">
                    <button className="cursor-pointer bg-[#FFBC3B] h-8 w-32 rounded"> + Add Recipe</button>
                </Link>
            </nav>
        </>
    )
}

export default Navbar;

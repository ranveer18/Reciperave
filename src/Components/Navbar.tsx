import { FaSearch } from "react-icons/fa";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        console.log(window.innerWidth);

        window.addEventListener("scroll", () => {
            if (window.innerWidth > 768) {
                if (window.scrollY > 50) {
                    if (navRef.current) {
                        navRef.current.style.height = "auto";
                        navRef.current.style.background = "#fbfaf4";
                        navRef.current.style.boxShadow = "0px 5px 10px #33333333";
                    }
                }
                else {
                    if (navRef.current) {
                        navRef.current.style.height = "auto";
                        navRef.current.style.background = "inherit";
                        navRef.current.style.boxShadow = "0 0 0 #fff";
                    }
                }
            }
        })
    }, [])
    return (
        <>
            {/* fbfaf4 */}
            <div className="flex absolute z-20 justify-end right-8 top-4 min-[786px]:hidden">
                {toggle ? <IoClose className="h-10 w-8" onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="h-10 w-8" onClick={() => setToggle(!toggle)} />}
            </div>

            <nav className={toggle ? "navbar" : "flex flex-row items-center justify-evenly py-3 fixed w-full h-16 z-10 max-[786px]:flex-col max-[786px]:hidden"} ref={navRef}>
                <div className="logo cursor-pointer">
                    <img src={logo} alt="" className="h-16" />
                </div>
                <ul className={toggle ? "navbar-ul" : "flex gap-7 cursor-pointer"}>
                    <li>
                        <Link to="/Reciperave">
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
                    <input type="text" name="" id="" placeholder="Search Your Recipe" className="focus:outline-none text-sm h-6 bg-inherit" />
                </div>
                <Link to="/Reciperave/login">
                    <button className="cursor-pointer bg-[#FFBC3B] h-8 w-32 rounded"> + Add Recipe</button>
                </Link>
            </nav>
        </>
    )
}

export default Navbar;

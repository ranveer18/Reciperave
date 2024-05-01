import { FaSearch } from "react-icons/fa";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
// import useDebou

const Navbar = ({ setSearchQuery }: any) => {
    const navRef = useRef<HTMLDivElement>(null);
    const [toggle, setToggle] = useState(false)
    const [isLogin, setIslogin] = useState(false)
    const [isOpen, setIsOpen] = useState(false);

    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://reciperave.onrender.com/api/v1"



    useEffect(() => {
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

                if (res.status === 200) {
                    setIslogin(true);
                }
                else {
                    setIslogin(false);
                }
            } catch (error) {

            }
        }
        checkLogin();
    }, [])
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/logout');
    };

    const handleInputChange = (event: any) => {
        setSearchQuery(event.target.value);
    };


    return (
        <>
            <div className="flex absolute z-20 justify-end right-8 top-4 min-[786px]:hidden">
                {toggle ? <IoClose className="h-10 w-8" onClick={() => setToggle(!toggle)} /> : <GiHamburgerMenu className="h-10 w-8" onClick={() => setToggle(!toggle)} />}
            </div>

            <nav className={toggle ? "navbar" : "flex flex-row items-center justify-evenly py-3 fixed w-full h-16 z-10 max-[786px]:flex-col max-[786px]:hidden"} ref={navRef}>
                <div className="logo cursor-pointer">
                    <img src={logo} alt="" className="h-16" />
                </div>
                <ul className={toggle ? "navbar-ul" : "flex gap-7 cursor-pointer"}>
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


                    <input type="text" name="" id=""
                        onChange={handleInputChange}
                        placeholder="Search Your Recipe" className="focus:outline-none text-sm h-6 bg-inherit" />

                </div>
                <Link to={isLogin ? "/addrecipe" : "/login"}>
                    <button className="cursor-pointer bg-[#FFBC3B] h-8 w-32 rounded"> + Add Recipe</button>
                </Link>
                {isLogin ?
                    <div className="relative inline-block text-left">
                        <div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-2 bg-inherit text-sm font-medium text-gray-700 hover:bg-inherit focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                <FaCircleUser className="h-5 w-5" />
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>

                        {isOpen && (
                            <div
                                className="origin-top-right absolute right-0 mt-2 w-32  rounded-md shadow-lg bg-[#FEF8E6] ring-1 ring-black ring-opacity-5 focus:outline-none"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabIndex={-1}
                            >
                                <div className="py-1" role="none">
                                    <button
                                        onClick={() => {
                                            navigate('/UserPage')
                                            setIsOpen(false);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                        tabIndex={-1}
                                    >
                                        Edit Profile
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                        role="menuitem"
                                        tabIndex={-1}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    : <></>}
            </nav>
        </>
    )
}

export default Navbar;

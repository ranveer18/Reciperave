import loginPhoto from "../images/login.jpg"
import { Link } from "react-router-dom"
const Loginform = () => {
    return (
        <>
            <div className='flex h-screen'>
                <div className='flex h-full w-full bg-[#fbfaf4] items-center justify-center text-[#03383F]'>
                    <div className="bg-[#fff] w-10/12 h-auto rounded flex flex-col items-center justify-center p-16">
                        <h1 className="text-4xl font-bold tracking-wider">Welcome back</h1>
                        <h4>Don't have an account? <Link to="/signup"><span className="text-[#F9972F] cursor-pointer">Sign up</span></Link></h4>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Email address <span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="Example@gmail.com" />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Password <span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="**********" />
                        </div>
                        <div className="w-3/4">
                        <span className="flex self-start text-xs mt-1">Forgotten Password?</span>
                        <button type="submit" className="h-10 w-full bg-[#FFBC3B] outline-none  text-[#03383F] font-bold placeholder:text-xs rounded my-5" >Login</button>
                        </div>
                    </div>
                </div>
                <div className='right bg-yellow-200 h-full w-full'>
                    <img src={loginPhoto} alt="" />
                </div>
            </div>
        </>
    )
}

export default Loginform

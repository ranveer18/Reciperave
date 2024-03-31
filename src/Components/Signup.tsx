import loginPhoto from "../images/login.jpg"
import { Link } from "react-router-dom"

const Signup = () => {
    return (
        <>
            <div className='flex h-screen'>
                <div className='flex h-full w-full bg-[#fbfaf4] items-center justify-center text-[#03383F]'>
                    <div className="bg-[#fff] w-10/12 h-auto rounded flex flex-col items-center justify-center p-16">
                        <h1 className="text-3xl font-bold tracking-wider">Create your account</h1>
                        
                        <h4 className="text-xm">Already have an account? <Link to="/login"><span className="text-[#F9972F] cursor-pointer">Sign In</span></Link></h4>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Full Name<span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="Tony Stark" />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Email address <span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="Example@gmail.com" />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Password <span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="**********" />
                        </div>
                        <div className="flex w-3/4 gap-2 text-[9px] cursor-pointer mt-2">
                            <input type="checkbox" className="flex splace-self-start gap-2" name="agree" id="agree" />
                            <label htmlFor="agree" className="cursor-pointer flex self-start">I agree to the terms and condition</label>
                        </div>
                        <div className="w-3/4">

                            <button type="submit" className="h-10 w-full bg-[#FFBC3B] outline-none  text-[#03383F] font-bold placeholder:text-xs rounded my-5" >Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='right bg-yellow-200 h-full w-full'>
                    <img src={loginPhoto} alt=""  className="h-full w-full"/>
                </div>
            </div>
        </>
    )
}

export default Signup

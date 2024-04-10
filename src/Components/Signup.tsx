import { useState } from "react"
import loginPhoto from "../images/login.jpg"
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ name: "", email: "", password: "" })
    const [ischecked, setisChecked] = useState(false)
    const handleChange = (event: any) => {
        const { name, value, checked } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
        setisChecked(checked)
    }
    const handleSubmit = (event: any) => {
        alert(`Registed`);
        navigate("/")
    };

    return (
        <>
            <div className='flex h-screen'>
                <div className='flex h-full w-full bg-[#fbfaf4] items-center justify-center text-[#03383F]'>
                    <form className="bg-[#fff] w-10/12 h-auto rounded flex flex-col items-center justify-center p-16" action="" method="post" onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold tracking-wider">Create your account</h1>

                        <h4 className="text-xm">Already have an account? <Link to="/login"><span className="text-[#F9972F] cursor-pointer">Sign In</span></Link></h4>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="name" className="flex place-self-start">Full Name<span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="name" required placeholder="Tony Stark"
                                onChange={handleChange}
                                name="name"
                                value={inputs.name}
                            />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="email" className="flex place-self-start">Email address <span className="text-red-700"> *</span></label>
                            <input type="email" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="Example@gmail.com"
                                onChange={handleChange}
                                name="email"
                                value={inputs.email}
                            />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5">
                            <label htmlFor="password" className="flex place-self-start">Password <span className="text-red-700"> *</span></label>
                            <input type="password" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="password" required placeholder="**********"
                                onChange={handleChange}
                                name="password"
                                value={inputs.password} />
                        </div>
                        <div className="flex w-3/4 gap-2 text-[9px] cursor-pointer mt-2">
                            <input type="checkbox" className="flex splace-self-start gap-2" name="agree" id="agree" required checked={ischecked} onChange={handleChange} />
                            <label htmlFor="agree" className="cursor-pointer flex self-start">I agree to the terms and condition</label>
                        </div>

                        <div className="w-3/4">

                            <button type="submit" className="h-10 w-full bg-[#FFBC3B] outline-none  text-[#03383F] font-bold placeholder:text-xs rounded my-5" >Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className='right bg-yellow-200 h-full w-full'>
                    <img src={loginPhoto} alt="" className="h-full w-full" />
                </div>
            </div>
        </>
    )
}

export default Signup

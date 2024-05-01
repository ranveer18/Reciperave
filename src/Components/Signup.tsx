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
    // const apiUrl = import.meta.env.VITE_API_URL;
    const apiUrl = "https://reciperave.onrender.com/api/v1"


    const handleRegister = async (event: any): Promise<void> => {
        event.preventDefault()
        try {
            const response = await fetch(`${apiUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
            });
            if (response.ok) {
                console.log('Registration successful');
                navigate("/Reciperave/login")
            } else {
                console.error('Registration failed:', await response.text());
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <>
            <div className='flex h-screen'>
                <div className='flex h-full w-full bg-[#fbfaf4] items-center justify-center text-[#03383F]'>
                    <form className="bg-[#fff] w-10/12 h-auto rounded flex flex-col items-center justify-center p-16 max-[500px]:p-5 max-[500px]:w-11/12 max-[768px]:px-6  max-[768px]:py-10 z-10" action="" method="post" onSubmit={handleRegister}>
                        <h1 className="text-3xl font-bold tracking-wider">Create your account</h1>

                        <h4 className="text-xm">Already have an account? <Link to="/Reciperave/login"><span className="text-[#F9972F] cursor-pointer">Sign In</span></Link></h4>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5 max-[768px]:w-full">
                            <label htmlFor="name" className="flex place-self-start">Full Name<span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="name" required placeholder="Tony Stark"
                                onChange={handleChange}
                                name="name"
                                value={inputs.name}
                            />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5 max-[768px]:w-full">
                            <label htmlFor="email" className="flex place-self-start">Email address <span className="text-red-700"> *</span></label>
                            <input type="email" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required placeholder="Example@gmail.com"
                                onChange={handleChange}
                                name="email"
                                value={inputs.email}
                            />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5 max-[768px]:w-full">
                            <label htmlFor="password" className="flex place-self-start">Password <span className="text-red-700"> *</span></label>
                            <input type="password" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="password" required placeholder="**********"
                                onChange={handleChange}
                                name="password"
                                value={inputs.password} />
                        </div>
                        <div className="flex w-3/4 gap-2 text-[9px] cursor-pointer mt-2 max-[768px]:w-full">
                            <input type="checkbox" className="flex splace-self-start gap-2" name="agree" id="agree" required checked={ischecked} onChange={handleChange} />
                            <label htmlFor="agree" className="cursor-pointer flex self-start">I agree to the terms and condition</label>
                        </div>

                        <div className="w-3/4">
                            <button type="submit" className="h-10 w-full bg-[#FFBC3B] outline-none  text-[#03383F] font-bold placeholder:text-xs rounded my-5" >Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className='right h-screen w-screen max-[500px]:absolute'>
                    <img src={loginPhoto} alt="" className="h-full w-full max-[500px]:opacity-60" />
                </div>
            </div>
        </>
    )
}

export default Signup

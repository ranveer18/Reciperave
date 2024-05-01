import { useState } from "react"
import loginPhoto from "../images/login.jpg"
import { Link, useNavigate } from "react-router-dom"

const Loginform = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({ email: "", password: "" });
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleLogin = async (event: any): Promise<void> => {
        event.preventDefault()

        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(inputs),
                credentials: 'include',
            });
            if (response.ok) {
                navigate("/Reciperave/addrecipe")
            } else {
                console.error('Login failed:', await response.text());
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };
    return (
        <>
            <div className='flex h-screen'>
                <div className='flex h-full w-full bg-[#fbfaf4] items-center justify-center text-[#03383F] max-[500px]:bg-none '>
                    <form className="bg-[#fff] w-10/12 h-auto rounded flex flex-col items-center justify-center p-16 max-[500px]:p-5 max-[500px]:w-11/12 max-[768px]:px-6  max-[768px]:py-10 z-10 " action="" method="post" onSubmit={handleLogin}>
                        <h1 className="text-4xl font-bold tracking-wider">Welcome back</h1>
                        <h4>Don't have an account? <Link to="/Reciperave/signup"><span className="text-[#F9972F] cursor-pointer">Sign up</span></Link></h4>

                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5 max-[768px]:w-full">
                            <label htmlFor="email" className="flex place-self-start">Email address <span className="text-red-700"> *</span></label>
                            <input type="text" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="email" required
                                name="email"
                                value={inputs.email}
                                onChange={handleChange} placeholder="Example@gmail.com" />
                        </div>
                        <div className="w-3/4 flex flex-col items-center gap-1 mt-5 max-[768px]:w-full">
                            <label htmlFor="email" className="flex place-self-start">Password <span className="text-red-700"> *</span></label>
                            <input type="password" className="h-10 w-full bg-[#f6f6f6] outline-none p-4 text-[#03383F] text-sm placeholder:text-xs rounded" id="password"
                                name="password"
                                value={inputs.password}
                                onChange={handleChange}
                                required placeholder="**********" />
                        </div>
                        <div className="w-3/4 max-[768px]:w-full">
                            <span className="flex self-start text-xs mt-1 ">Forgotten Password?</span>
                            <button type="submit" className="h-10 w-full bg-[#FFBC3B] outline-none  text-[#03383F] font-bold placeholder:text-xs rounded my-5" >Login</button>
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

export default Loginform

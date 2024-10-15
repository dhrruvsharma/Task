import React, { useState } from "react";
import Image from "../assets/Login Art.png"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const HandleChange = (e) => {
        const {name,value} = e.target;
        if (name === 'username') {
            setUsername(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'email') {
            setEmail(value);
        }
    }

    const HandleSubmit = (e) => {
        setError(false)
        e.preventDefault();
        if (password.length < 8) {
            setError(true);
            return
        }
        localStorage.clear()
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        navigate('/dashboard');
    }

    return (
        <>
            <div className="flex flex-col-reverse justify-end gap-8 h-screen w-screen p-5 sm:flex-row sm:items-center sm:justify-between md:gap-0">
                <div className="flex-row items-center vsm:items-start vsm:w-full md:w-1/3 md:m-auto">
                    <h1 className="text-4xl font-bold mb-5 sm:text-5xl md:text-3xl lg:text-4xl">Welcome Back &#128075;</h1>
                    <p className="xl:text-xl md:text-base">Today is a new day. It's your day, you shape it</p>
                    <p className="xl:text-xl md:text-base">Sign in to start managing your projects.</p>
                    <form className="flex flex-col items-start vsm:w-full" onSubmit={HandleSubmit}>
                        <label htmlFor="email" className="mt-5">Email</label>
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="example@example.com" className="bg-slate-200 rounded-lg w-full p-0.5 text-l sm:text-xl" required onChange={HandleChange}/>  
                        <label htmlFor="username" className="mt-5">Username</label>
                        <input type="text" name="username" id="username" placeholder="Username" className="bg-slate-200 rounded-lg w-full p-0.5 text-l sm:text-xl" required autoComplete="off" onChange={HandleChange}/> 
                        <label htmlFor="password" className="mt-5">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="bg-slate-200 rounded-lg w-full p-0.5 text-l sm:text-xl" required onChange={HandleChange}/>
                        <p className="underline mt-2">Forgot Password?</p>
                        <div>
                            {error && (
                                <p className="mt-2 text-red-700">Password must contain atleast 8 characters</p>
                            )}
                        </div>
                        <button type="submit" className="text-white bg-btn hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm p-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-5">Sign in</button>
                    </form>
                    <p className="mt-5">Don't have an account?<Link to={"/signup"} className="underline">Sign up</Link></p>
                </div>
                <figure className="h-1/5 flex-none vsm:h-1/4 sm:h-2/3 sm:w-1/2 lg:h-5/6">
                    <img src={Image} alt="Login Image" className="h-full w-full rounded-3xl lg:w-3/4 lg:ml-auto"/>
                </figure>
            </div>
        </>
    )
}
export default Login
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../assets/Singup.png"

const Signup = () => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [confirm,setConfirm] = useState('');
    const [error,setError] = useState([]);
    const navigate = useNavigate();
    const HandleChange = (e) => {
        const {name,value} = e.target;
        if (name === "name") {
            setName(value);
        }
        if (name === "password"){
            setPassword(value);
        }
        if (name === "confirm") {
            setConfirm(value);
        }
        if (name === "username") {
            setUsername(value);
        }
        if (value === "email") {
            setEmail(value);
        }
    }

    const HandleSubmit = (e) => {
        setError([]);
        e.preventDefault();
        if (password.length < 8) {
            setError((prev) => [...prev,'Password must have atleast 8 characters']);
        }
        if (password !== confirm) {
            setError((prev) => [...prev,'Password and confirm password do not match']);
        }
        if (error.length === 0) {
            localStorage.clear
            localStorage.setItem('username',username);
            localStorage.setItem('email',email);
            navigate("/dashboard");
        } 
    }

    return (
        <>
            <div className="m-10 sm:flex sm:items-center sm:gap-8 sm:h-screen sm:m-0 ">
                <div className="flex flex-col justify-center px-1 sm:w-1/2">
                    <form className="flex flex-col lg:w-2/3 lg:mx-auto" onSubmit={HandleSubmit}>
                        <h1 className="text-2xl mb-10">Get Started Now</h1>
                        <label htmlFor="name" className="font-semibold">Name</label>
                        <input type="text" name="name" id="name" autoComplete="off" required placeholder="Name" className="border-black border-solid rounded-lg border-2 p-1" onChange={HandleChange}/>
                        <label htmlFor="email" className="font-semibold mt-5">Email</label>
                        <input type="email" name="email" id="email" autoComplete="off" placeholder="Email" required className="border-black border-solid rounded-lg border-2 p-1" onChange={HandleChange}/>
                        <label htmlFor="username" className="font-semibold mt-5">Username</label>
                        <input type="text" name="username" id="username" autoComplete="off" required placeholder="Username" className="border-black border-solid rounded-lg border-2 p-1" onChange={HandleChange}/>
                        <label htmlFor="password" className="font-semibold mt-5">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" required className="border-black border-solid rounded-lg border-2 p-1" onChange={HandleChange}/>
                        <label htmlFor="confirm" className="font-semibold mt-5">Confirm Password</label>
                        <input type="password" name="confirm" id="confirm" placeholder="Confirm Password" required className="border-black border-solid rounded-lg border-2 p-1" onChange={HandleChange}/>
                        <div>
                            {error?.map((item,index) => (
                                <p className="mt-2 text-red-700" key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>
                        <button type="submit" className="bg-sp mt-5 text-white rounded-lg mb-3 p-1">Sign Up</button>
                        <p>Have an account <Link to={"/"} className="underline">Sign in</Link></p>
                    </form>
                </div>
                <figure className="hidden sm:flex sm:h-3/4 md:h-full md:w-3/4 md:ml-auto lg:w-1/2">
                    <img src={Image} alt="Sign up Image" className="md:w-full"/>
                </figure>
            </div>
        </>
    )
}
export default Signup
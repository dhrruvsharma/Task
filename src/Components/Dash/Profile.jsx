import React, { useEffect, useState } from "react";
import { useUserContext } from "./UserContext";

const Profile = () => {

    const {username,setUsername} = useUserContext();
    const {email,setEmail} = useUserContext();
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const [n,setN] = useState(localStorage.getItem('username'));
    const [e,SetE] = useState(localStorage.getItem('email'));
    const [display, setDisplay] = useState(false);
    const completed = tasks.filter(task => task.status === 1).length;

    const HandleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        }
        if (name === 'email') {
            setEmail(email);
        }
    }

    useEffect(() => {
        if (n !== username || e !== email) {
            setDisplay(true);
        } else{
            setDisplay(false);
        }
    }, [username, email])

    const SaveChanges = (e) => {
        e.preventDefault();
        localStorage.setItem('username',username);
        localStorage.setItem('email',email);
        setN(localStorage.getItem('username'));
        SetE(localStorage.getItem('email'));
        setDisplay(false);
    }


    return (
        <div className="profile w-full">
            <h1 className="text-5xl font-bold mb-5">Your Profile</h1>
            <form onSubmit={SaveChanges} className="flex flex-col justify-center w-min">
                <div className="flex flex-row gap-4 mb-4 mt-5">
                    <h1 className="text-4xl min-w-60">Username :-</h1> <input type="text" name="username" id="username" onChange={HandleChange} value={username} className="bg-transparent border-1 border-black border-2 rounded" autoComplete="off"/>
                </div>
                <div className="flex flex-row gap-4 mt-5">
                    <h1 className="text-4xl min-w-60">Email :- </h1> <input type="email" name="email" id="email" onChange={HandleChange} value={email} className="bg-transparent border-1 border-black border-2 rounded" autoComplete="off"/>
                </div>
                {display && (
                    <div className="flex justify-center mt-5">
                        <button type="submit" className="rounded bg-black text-white p-1">Save Changes</button>
                    </div>
                )}
            </form>
            <h1 className="text-4xl mt-5">Total Tasks :- {tasks.length}</h1>
            <h1 className="text-4xl mt-5">Tasks Completed :- {completed}</h1>
        </div>
    )
}
export default Profile;
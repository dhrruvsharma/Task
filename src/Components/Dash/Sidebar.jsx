import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ className, children }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const Logout = () => {
        localStorage.clear();
        navigate('/');
    }

    const menuItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Profile", path: "/dashboard/profile" }
    ]

    return (
        <div className={`${className} flex flex-col w-full justify-between`}>
            <div className="mc">
                {menuItems.map((item, index) => (
                    <h1
                        key={index}
                        onClick={() => navigate(item.path)}
                        className={`w-full font-semibold h-max ml-5 p-2 mt-5 cursor-pointer ${location.pathname === item.path ? 'bg-bgc' : 'bg-white'}`}
                    >{item.name}</h1>
                ))}
                {children}
            </div>
            <button onClick={Logout} className="m-5 bg-black text-white rounded lg p-1">Logout</button>
        </div>
    )
}

export default Sidebar;
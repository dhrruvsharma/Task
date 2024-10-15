import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
    let auth = false;
    let token = localStorage?.getItem('username')
    let email = localStorage?.getItem('email');
    if (token && email) {
        auth = true;
    }
    return(
        auth ? <Outlet />:<Navigate to={'/'} />
    )
}
export default Protected;
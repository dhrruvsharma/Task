import React from "react";
import Sidebar from "./Sidebar";
import Head from "./Head";
import "./Dash.css"
import DashHome from "./DashHome";
import Setting from "./Setting";
import Profile from "./Profile";
import { Route, Routes } from "react-router-dom";

const Dash = () => {
    return(
        <div className="main-container">
            <Head className={'head'} />
            <Sidebar className={'side'}/>
            <div className="dash">
                <Routes>
                    <Route path="/" element={<DashHome />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </div>
    )
}
export default Dash;    
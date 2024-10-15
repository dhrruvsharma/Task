import React from "react";
import { useUserContext } from "./UserContext";

const Head = ({ className, children }) => {
    
    const {username} = useUserContext();

    return (
        <div className={className}>
            <div className="flex justify-between mx-10 items-center">
                <h1 className="text-4xl">
                    Greetings {username}<br />
                    Welcome!
                </h1>
                <h1 className="text-4xl">Nexus</h1>
            </div>
            {children}
        </div>
    )
}
export default Head;
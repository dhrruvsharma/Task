import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [email,setemail] = useState(localStorage.getItem('email'));
    const [username,setUsername] = useState(localStorage.getItem('username'));

    return(
        <UserContext.Provider value={{email,setemail,username,setUsername}}>
            {children}
        </UserContext.Provider>
    )
}
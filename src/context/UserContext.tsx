"use client";

import { createContext, ReactNode, useState } from "react";

// Define the shape of the context data
const defaultUserState = {
    user: {
        isLoggedIn: false,
        name: '',
    },
    logIn: (name: string) => { },
    logOut: () => { },
};

const UserContext = createContext(defaultUserState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState({ isLoggedIn: false, name: '' });

    const logIn = (name: string) => {
        setUser({ isLoggedIn: true, name });
    };

    const logOut = () => {
        setUser({ isLoggedIn: false, name: '' });
    };

    return (
        <UserContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
import React, { createContext, useState } from 'react';

export const loginFormContext = createContext(null);

const Setlogin = ({children}) => {
    const [login, setLogin] = useState(true);
    const value = {login, setLogin}
    return (
        <loginFormContext.Provider value={value}>{children}</loginFormContext.Provider>
    );
};

export default Setlogin;
import React, { useContext } from 'react';
import { loginFormContext } from '../SharedLogin/Setlogin';

const useSetlogin = () => {
    const {login, setLogin} = useContext(loginFormContext)
    return {login, setLogin}
};

export default useSetlogin;
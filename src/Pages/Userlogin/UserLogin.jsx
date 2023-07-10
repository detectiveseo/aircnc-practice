import React from 'react';
import Regestration from './Regestration/Regestration';
import Login from './Login/Login';
import useSetlogin from '../../components/Shared/Hooks/useSetlogin';

const UserLogin = () => {
    const setLoginFun = useSetlogin();
    const {login, setLogin} = setLoginFun;
    return (
        <div>
            {
                login? <Login setLogin={setLogin} /> : <Regestration setLogin={setLogin} />
            }
        </div>
    );
};

export default UserLogin;
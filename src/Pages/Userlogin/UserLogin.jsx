import React from 'react';
import { useState } from 'react';
import Regestration from './Regestration/Regestration';
import Login from './Login/Login';

const UserLogin = () => {
    const [login, setLogin] = useState(true);
    return (
        <div>
            {
                login? <Login setLogin={setLogin} /> : <Regestration setLogin={setLogin} />
            }
        </div>
    );
};

export default UserLogin;
import React from 'react';
import Regestration from './Regestration/Regestration';
import Login from './Login/Login';
import useSetlogin from '../../components/Shared/Hooks/useSetlogin';
import useAuthContext from '../../components/Shared/Hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const setLoginFun = useSetlogin();
    const { login, setLogin } = setLoginFun;

    const authIformation = useAuthContext();
    const {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
    } = authIformation;

    const navigate = useNavigate();

    // google singin button 
    const handleSingIn = () => {
        signInWithGoogle().then((res) => {
            console.log(res);
            navigate("/")
        }).catch(err => {
            setLoading(false);
            toast.error(err.message);
        })
    }
    return (
        <div>
            {
                login ?
                    <Login
                        loading={loading}
                        setLoading={setLoading}
                        signIn={signIn}
                        handleSingIn={handleSingIn}
                        setLogin={setLogin} />
                    :
                    <Regestration
                        loading={loading}
                        setLoading={setLoading}
                        createUser={createUser}
                        updateUserProfile={updateUserProfile}
                        handleSingIn={handleSingIn}
                        setLogin={setLogin} />
            }
        </div>
    );
};

export default UserLogin;
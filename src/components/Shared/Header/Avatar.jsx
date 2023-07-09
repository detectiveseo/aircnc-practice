import React from 'react';
import avaterImg from '../../../assets/images/placeholder.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Avatar = () => {
    const {user} = useContext(AuthContext);
    return <img className='rounded-full' src={user && user?.photoURL? user.photoURL : avaterImg } width="40" height="40" alt='profile' />
};

export default Avatar;
import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to="/" className='w-full text-center flex justify-center items-center'>
            <img width="150px" src={logo}alt="" />
        </Link>
    );
};

export default Logo;
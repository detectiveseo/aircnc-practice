import React from 'react';
import logoImg from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';
const Logo = () => {
    return <Link to="/">
        <img className='hidden md:block' width="100px" height='100px' src={logoImg} alt='logo' />
    </Link>
};

export default Logo;
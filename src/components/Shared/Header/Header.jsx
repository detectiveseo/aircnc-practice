import React from 'react';
import Container from '../Layout/Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';

const Header = () => {
    return (
        <div className='w-full h-28 flex justify-center items-center fixed top-0 shadow-sm z-10'>
            <Container>
                <div className='flex justify-between'>
                        <Logo />
                        <Search />
                        <MenuDropdown />
                </div>
            </Container>
        </div>
    );
};

export default Header;
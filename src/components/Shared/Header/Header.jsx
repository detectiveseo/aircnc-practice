import React from 'react';
import Container from '../Layout/Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';
import useSetlogin from '../Hooks/useSetlogin';

const Header = () => {
    const SetLoginFun = useSetlogin();
    return (
        <div className='w-full h-28 flex justify-center items-center fixed top-0 shadow-sm z-10'>
            <Container>
                <div className='flex justify-between'>
                        <Logo />
                        <Search />
                        <MenuDropdown SetLoginFun={SetLoginFun} />
                </div>
            </Container>
        </div>
    );
};

export default Header;
import React from 'react';

const Container = ({children}) => {
    return (
        <div className=' w-full md:w-11/12 lg:w-10/12 mx-auto'>
            {children}
        </div>
    );
};

export default Container;
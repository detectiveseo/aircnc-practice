import React from 'react';
import { DotLoader } from 'react-spinners';

const DotLoading = () => {
    return (
        <div className='flex h-[70vh] justify-center items-center'>
            <DotLoader
                color="#F43F5E"
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default DotLoading;
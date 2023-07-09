import React from 'react';

const CategoryBox = ({categorie}) => {
    const {label, icon: Icon } = categorie

    return (
        <div className='flex flex-col justify-center items-center gap-2 p-3 border-b-2 rounded hover:text-neutral-800 text-neutral-500 border-transparent'>
            <Icon size={27} />
            <p>{label}</p>
        </div>
    );
};

export default CategoryBox;
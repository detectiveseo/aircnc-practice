import React from 'react';
import { categories } from './categories';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <div className='flex items-center justify-between overflow-x-auto'>
            {categories.map((categorie, index) => {
                return (
                    <CategoryBox key={index} categorie={categorie} />
                )
            })}
            
        </div>
    );
};

export default Categories;
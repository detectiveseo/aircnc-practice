import queryString from 'query-string';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({ categorie }) => {
    const { label, icon: Icon } = categorie;
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();

    const categorieFind = (e) => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params);
        }
        const updatedQuery = {
            ...currentQuery, category: label
        }
        const url = queryString.stringifyUrl({
            url: '/',
            query: updatedQuery,
        }, {skipNull: true})

        navigate(url, { replace: true })
    }

    return (
        <div
            onClick={categorieFind}
            className='flex cursor-pointer flex-col justify-center items-center gap-2 p-3 border-b-2 rounded hover:text-neutral-800 text-neutral-500 border-transparent'>
            <Icon size={27} />
            <p>{label}</p>
        </div>
    );
};

export default CategoryBox;
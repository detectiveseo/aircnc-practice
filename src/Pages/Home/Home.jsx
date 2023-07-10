import React from 'react';
import Categories from '../../components/Categories/Categories.jsx'
import CardContainer from '../../components/RoomsCard/CardContainer.jsx';

const Home = () => {
    return (
        <div>
            <Categories />
            <CardContainer />
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories.jsx'
import CardContainer from '../../components/Room/CardContainer.jsx';
import useRooms from '../../Hooks/useRooms.jsx';

const Home = () => {
    

    return (
        <div>
            <Categories />
            <CardContainer />
        </div>
    );
};

export default Home;
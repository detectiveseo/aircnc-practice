import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const CardContainer = () => {
    const [rooms, setRooms ] = useState([]);
    useEffect(() => {
        axios.get('./Rooms.json').then(res => {
            setRooms(res.data)
        })
    }, [])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-20'>
            {
                rooms.map((room, index) => <Card key={index} room={room} />)
            }
        </div>
    );
};

export default CardContainer;
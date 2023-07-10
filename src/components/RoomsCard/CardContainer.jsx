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

    console.log(rooms.length);
    return (
        <div className='grid grid-cols-5 gap-10 mt-20'>
            {
                rooms.map(room => <Card room={room} />)
            }
        </div>
    );
};

export default CardContainer;
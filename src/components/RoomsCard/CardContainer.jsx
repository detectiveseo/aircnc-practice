import axios from 'axios';
import React from 'react';
import { useEffect, CSSProperties, useState } from 'react';
import Card from './Card';
import DotLoading from '../Shared/Loader/DotLoading';


const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('./Rooms.json').then(res => {
            setRooms(res.data);
            setLoading(false)
        })
    }, [])

    if(loading){
        return <DotLoading />
    }
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-10'>
            {
                rooms.map((room, index) => <Card key={index} room={room} />)
            }
        </div>
    )
};
export default CardContainer;
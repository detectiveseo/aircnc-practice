import axios from 'axios';
import React from 'react';
import { useEffect, CSSProperties, useState } from 'react';
import Card from './Card';
import { DotLoader } from 'react-spinners';


const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get('./Rooms.json').then(res => {
            setRooms(res.data);
            setLoading(false)
        })
    }, [])

    return (
        <div>
            {!loading ?
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-20'>
                    {
                        rooms.map((room, index) => <Card key={index} room={room} />)
                    }
                </div> :
                <div className='flex h-[70vh] justify-center items-center'>
                    <DotLoader
                        color="#F43F5E"
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            }
        </div>
    );
};

export default CardContainer;
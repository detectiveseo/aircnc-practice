import axios from 'axios';
import React from 'react';
import { useEffect, CSSProperties, useState } from 'react';
import Card from './Card';
import DotLoading from '../Shared/Loader/DotLoading';
import { useSearchParams } from 'react-router-dom';
import NotFound from '../Shared/Headings/NotFound';


const CardContainer = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [params, setParams] = useSearchParams();
    const searchCategory = params.get('category');

    useEffect(() => {
        axios.get('./Rooms.json').then(res => {
            if (searchCategory) {
                const rooms = res.data.filter(room => room.category === searchCategory)
                console.log(rooms)
                setRooms(rooms);
            } else {
                setRooms(res.data);
            }
            setLoading(false)
        })
    }, [searchCategory])

    if (loading) {
        return <DotLoading />
    }
    return (
        <>
            {rooms && rooms.length > 0 ? <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-10'>
                {
                    rooms.map((room, index) => <Card key={index} room={room} />)
                }
            </div> : <div className='h-[40vh] flex justify-center items-center'>
                <NotFound
                    title="Sorry No Avilabe Location"
                    subtitle="Please Select Other Categoris"
                    center={true}
                />
            </div>}
        </>
    )
};
export default CardContainer;
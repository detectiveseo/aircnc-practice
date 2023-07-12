import React from 'react';
import SingleListHero from '../../components/Room/SingleListHero';
import RoomInfo from '../../components/Room/RoomInfo';
import RoomBookingCalender from '../../components/Room/RoomBookingCalender';
import { useLoaderData } from 'react-router-dom';

const SingleRoom = () => {
    const [singleRoomData] = useLoaderData();
    return (
        <div className='flex flex-col gap-10 py-10'>
            <div>
                <SingleListHero singleRoomData={singleRoomData} />
            </div>
            <div className='flex flex-col-reverse lg:flex-row gap-20'>
                <div className='w-full lg:w-8/12'>
                    <RoomInfo singleRoomData={singleRoomData} />
                </div>
                <div className='w-full lg:w-4/12 shadow-lg rounded-xl p-10'>
                    <RoomBookingCalender singleRoomData={singleRoomData} />
                </div>
            </div>
        </div>
    );
};

export default SingleRoom;
import React from 'react';
import Headings from '../Shared/Headings/Headings';

const SingleListHero = ({singleRoomData}) => {
    const {bathrooms, bedrooms, category, description, from , image, location, price, title, to, total_guest, userEmail, userName} = singleRoomData;
    return (
        <div>
            <div>
                <Headings
                    title={title}
                    subtitle={location}
                />
            </div>
            <div className='w-full overflow-hidden rounded-xl'>
                <img className='w-full object-cover' src={image} alt='vacation image' />
            </div>
        </div>
    );
};

export default SingleListHero;
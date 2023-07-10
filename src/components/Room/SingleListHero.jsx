import React from 'react';
import Headings from '../Shared/Headings/Headings';

const SingleListHero = () => {
    return (
        <div>
            <div>
                <Headings
                    title="This is the room q"
                    subtitle="this is the location"
                />
            </div>
            <div className='w-full overflow-hidden rounded-xl'>
                <img className='w-full object-cover' src='https://wander-lush.org/wp-content/uploads/2022/03/Beautiful-places-in-Bangladesh-WMC-hero.jpg' alt='vacation image' />
            </div>
        </div>
    );
};

export default SingleListHero;
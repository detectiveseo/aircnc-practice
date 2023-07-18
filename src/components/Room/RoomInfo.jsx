const RoomInfo = ({singleRoomData}) => {
    const {bathrooms, bedrooms, category, description, from , image, location, price, title, to, total_guest, userEmail, userName} = singleRoomData;
    return (
        <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
                <div
                    className='
              text-xl 
              font-semibold 
              flex 
              flex-row 
              items-center
              gap-2
            '
                >
                    <div>Hosted by {userName}</div>

                    <img
                        className='rounded-full'
                        height='30'
                        width='30'
                        alt='Avatar'
                        src='https://a0.muscache.com/im/pictures/user/bb9ba580-9b3b-4402-ac92-3976abe1a178.jpg'
                    />
                </div>
                <div
                    className='
              flex 
              flex-row 
              items-center 
              gap-4 
              font-light
              text-neutral-500
            '
                >
                    <div>{total_guest} guests</div>
                    <div>{bedrooms} rooms</div>
                    <div>{bathrooms} bathrooms</div>
                </div>
            </div>

            <hr />
            <div
                className='
        text-lg font-light text-neutral-500'
            >{description}
            </div>
            <hr />
        </div>
    )
}

export default RoomInfo
import { DateRange } from 'react-date-range'
import Button from '../Buttons/Button'

const RoomBookingCalender = ({singleRoomData}) => {
    const {bathrooms, bedrooms, category, description, from , image, location, price, title, to, total_guest, userEmail, userName} = singleRoomData;
    return (
        <>
            <div>
                <p className='text-black border-b pb-3 font-bold text-4xl'>$ <span>{price}</span> <span className=' text-2xl text-gray-300'>night</span></p>
            </div>
            <div className="flex flex-col justify-center items-center text-left">
                <DateRange
                    rangeColors={['#262626']}
                    date={new Date()}
                    direction='vertical'
                    showDateDisplay={false}
                    minDate={new Date()}
                />
            </div>
            <div className='text-2xl font-bold my-4 flex justify-between'>
                <span>Total</span>
                <span>$200</span>
            </div>
            <Button label="Booking Now" />
        </>
    )
}

export default RoomBookingCalender;
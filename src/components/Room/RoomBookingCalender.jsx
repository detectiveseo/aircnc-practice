import { DateRange } from 'react-date-range'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Button from '../Buttons/Button'

const RoomBookingCalender = () => {
    return (
        <>
            <div>
                <p className='text-black border-b pb-3 font-bold text-4xl'>$ <span>200</span> <span className=' text-2xl text-gray-300'>night</span></p>
            </div>
            <DateRange
                rangeColors={['#262626']}
                date={new Date()}
                direction='vertical'
                showDateDisplay={false}
                minDate={new Date()}
            />
            <div className='text-2xl font-bold my-4 flex justify-between'>
                <span>Total</span>
                <span>$200</span>
            </div>
            <Button label="Booking Now" />
        </>
    )
}

export default RoomBookingCalender
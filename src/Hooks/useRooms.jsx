import axios from 'axios';

const useRooms = () => {
    const url = `${import.meta.env.VITE_SERVER_LINK}all-rooms`;
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => resolve(res.data)).catch(err => reject(err))
    }) 
};

export default useRooms;
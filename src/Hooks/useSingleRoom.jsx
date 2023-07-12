import axios from 'axios';

const useSingleRoom = async({id}) => {
    const url = `${import.meta.env.VITE_SERVER_LINK}room/${id}`
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => resolve(res.data))
    })
};

export default useSingleRoom;
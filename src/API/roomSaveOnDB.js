import axios from 'axios';

const roomSaveOnDB = async (data) => {
   const url = `${import.meta.env.VITE_SERVER_LINK}add-room`;
   return new Promise ((resolve, reject) => {
    try{
        axios.post(url, data)
        .then(res =>  resolve(res.data)
            );
    }catch(err){
        throw(err)
    }
   })
};

export default roomSaveOnDB;
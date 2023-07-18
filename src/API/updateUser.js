import axios from "axios"

const updateuser = (email, role) => {
    const url = `${import.meta.env.VITE_SERVER_LINK}user-update/?email=${email}`
    axios.put(url, { role }).then(res => console.log(res.data))
}

export default updateuser;
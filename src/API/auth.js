import axios from "axios"
import { toast } from "react-hot-toast"

//sabe user to database
export const saveUser = (user) => {
    const userData = {
        email: user.email,
    }
    axios.put(`${import.meta.env.VITE_SERVER_LINK}user/${user?.email}`, userData, {
        headers: {
            'content-type': 'application/json'
        }
    }).then(() => toast.success(`welcome to aircnc ${user.displayName}`)).catch(err => toast.error(err.message))
}
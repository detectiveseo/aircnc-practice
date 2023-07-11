import axios from "axios"
import { toast } from "react-hot-toast"

//sabe user to database
export const saveUser = (user) => {
    console.log("from auth save", user.email)
    const userData = {
        email: user.email,
    }
    axios.put(`http://localhost:5000/user/${user?.email}`, userData, {
        headers: {
            'content-type': 'application/json'
        }
    }).then(() => toast.success(`welcome to aircnc ${user.displayName}`)).catch(err => toast.error(err.message))
}
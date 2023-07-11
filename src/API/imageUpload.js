import axios from "axios";
import { toast } from "react-hot-toast";

export const imageUpload = (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const postImgUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_Host}`

    axios.post(postImgUrl, formData)
    .then(res => res.data)
    .catch((err) => {
                toast.error(err);
            })
}
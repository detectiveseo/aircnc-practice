import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

export const imageUpload = async (image) => {
    const formData = new FormData();
    formData.append("image", image);

    const postImgUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_Host}`;
    
    try {
        return new Promise((resolve, reject) => {
            axios.post(postImgUrl, formData)
                .then(res => {
                    const imageUrl = res.data.data.display_url;
                    resolve(imageUrl);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
}
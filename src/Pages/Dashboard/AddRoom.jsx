import React, { useState } from 'react';
import AddSingleRoomForm from '../../components/Forms/AddSingleRoomForm';
import { imageUpload } from '../../API/imageUpload';

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');

  const handleImgeTextChange = (event) => {
    const image = event.target.files[0];
    setUploadButtonText(image.name)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true);
    const form = event.target;
    // const location = form.location.value;
    // const title = form.title.value;
    // const from = dates.startDate;
    // const to = dates.endDate;
    // const price = form.price.value;
    // const total_guest = form.total_guest.value;
    // const bedrooms = form.bedrooms.value;
    // const bathrooms = form.bathrooms.value;
    // const description = form.desciption.value;
    // const category = form.category.value;
    const imageFile = form.image.files[0];
    imageUpload(imageFile)
    console.log("after image upload")
  }

  return (
    <div>
      <AddSingleRoomForm 
      loading={loading}
      handleImgeTextChange={handleImgeTextChange}
      uploadButtonText={uploadButtonText}
      handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddRoom;
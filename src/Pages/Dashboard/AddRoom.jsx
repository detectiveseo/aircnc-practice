import React, { useState } from 'react';
import AddSingleRoomForm from '../../components/Forms/AddSingleRoomForm';
import { imageUpload } from '../../API/imageUpload';
import useUser from '../../Hooks/useUser';
import roomSaveOnDB from '../../API/roomSaveonDB';
import { toast } from 'react-hot-toast';

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState('Upload Image');
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  })
  const handleDates = (event) => {
    setDates(event.selection);
  }
  const { user } = useUser();

  const handleImgeTextChange = (event) => {
    const image = event.target.files[0];
    setUploadButtonText(image.name)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true);
    const form = event.target;
    const location = form.location.value;
    const title = form.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const price = form.price.value;
    const total_guest = form.total_guest.value;
    const bedrooms = form.bedrooms.value;
    const bathrooms = form.bathrooms.value;
    const description = form.description.value;
    const category = form.category.value;
    const image = form.image.files[0];

    imageUpload(image).then(res => {
      const data = {
        location,
        title,
        from,
        to,
        price,
        total_guest,
        bedrooms,
        bathrooms,
        description,
        category,
        image: res,
        userName: user.displayName,
        userEmail: user.email,
      }
      roomSaveOnDB(data).then(res => {
        if(res.acknowledged){
        toast.success("New Room Has been added")
        setLoading(false);
        form.reset();
      }}
        ).catch(err => {
          toast.error("something went wrong, please try again");
          setLoading(false);
        })
    })
  }

  return (
    <div>
      <AddSingleRoomForm
        loading={loading}
        handleImgeTextChange={handleImgeTextChange}
        dates={dates}
        handleDates={handleDates}
        uploadButtonText={uploadButtonText}
        handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddRoom;
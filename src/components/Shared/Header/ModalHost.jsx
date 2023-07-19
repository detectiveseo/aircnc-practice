import React, { useContext, useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react'
import updateUser from '../../../API/updateUser';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-hot-toast';

const ModalHost = ({setIsModal, isModal}) => {
    const {user} = useContext(AuthContext);
    const role = "Host";
    const email = user?.email;
    function handleDeactivate() {
        updateUser(email, role);
        setIsModal(false);
        toast.success("You've became a host");
        window.location.reload()

    }
    return (
        <Dialog
            className="text-center w-full bg-black shadow-xl fixed top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center z-[5000]"
            open={isModal} onClose={() => setIsModal(false)}>
            <Dialog.Panel
            className="bg-white p-10 flex flex-col gap-4 w-4/12 mx-auto"
            >
                <Dialog.Title
                className="text-3xl uppercase font-bold"
                >Will you be a host?</Dialog.Title>

                <p>
                    Are you sure you want to deactivate your account? All of your data
                    will be permanently removed. This action cannot be undone.
                </p>

                {/*
            You can render additional buttons to dismiss your dialog by setting
            `isOpen` to `false`.
          */}
                <div className='flex justify-center items-center gap-5'>
                    <button
                        className='btn bg-red-700 w-40 text-white p-2'
                        onClick={() => setIsModal(false)}>Cancel</button>
                    <button
                        className='btn bg-green-700 w-40 text-white p-2'
                        onClick={handleDeactivate}>Host</button>
                </div>
            </Dialog.Panel>
        </Dialog>

    );
};

export default ModalHost;
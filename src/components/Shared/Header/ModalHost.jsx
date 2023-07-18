import React, { useState } from 'react';
import { Dialog } from '@headlessui/react'

const ModalHost = ({setIsModal, isModal}) => {
    function handleDeactivate() {
        setIsModal(false)
    }
    return (
        <Dialog
            className="text-center w-full bg-black shadow-xl absolute top-0 bottom-0 left-0 right-0 bg-opacity-70 flex justify-center items-center z-[5000]"
            open={isModal} onClose={() => setIsModal(false)}>
            <Dialog.Panel
            className="bg-white p-10 flex flex-col gap-4 w-4/12 mx-auto"
            >
                <Dialog.Title
                className="text-3xl uppercase"
                >Will be a host?</Dialog.Title>
                <Dialog.Description>
                    This will permanently deactivate your account
                </Dialog.Description>

                <p>
                    Are you sure you want to deactivate your account? All of your data
                    will be permanently removed. This action cannot be undone.
                </p>

                {/*
            You can render additional buttons to dismiss your dialog by setting
            `isOpen` to `false`.
          */}
                <div className='flex justify-center items-center gap-10'>
                    <button
                        className='btn bg-red-700 text-white p-2'
                        onClick={() => setIsModal(false)}>Cancel</button>
                    <button
                        className='btn bg-green-700 text-white p-2'
                        onClick={handleDeactivate}>Deactivate</button>
                </div>
            </Dialog.Panel>
        </Dialog>

    );
};

export default ModalHost;
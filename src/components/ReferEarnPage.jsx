import React, { useState } from 'react';
import ReferralForm from './ReferralForm';

const ReferEarnPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="text-center py-10">
                <h1 className="text-4xl font-bold mb-4">Refer & Earn</h1>
                <p className="text-xl mb-6">Invite your friends and earn rewards!</p>
                <button
                    onClick={handleOpenModal}
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
                >
                    Refer Now
                </button>
            </div>
            <ReferralForm isOpen={isModalOpen} handleClose={handleCloseModal} />
        </div>
    );
};

export default ReferEarnPage;

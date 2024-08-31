import { useState } from 'react';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [tripName, setTripName] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleAdd = () => {
        
        console.log({ tripName, location, date });
        closeModal();
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <button
                onClick={openModal}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Open Modal
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>

                        <h2 className="text-2xl font-semibold mb-4">Add Trip</h2>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Trip Name
                            </label>
                            <input
                                type="text"
                                value={tripName}
                                onChange={(e) => setTripName(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Location
                            </label>
                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="w-full mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAdd}
                                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
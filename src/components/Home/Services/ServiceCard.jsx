import React from 'react';

const ServiceCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-72 py-5">
            <img src={image} alt={title} className="mx-auto w-12 object-cover" />
            <div className="p-6 grid justify-between">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
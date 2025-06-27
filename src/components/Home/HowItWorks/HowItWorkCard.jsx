import React from 'react';

const HowItWorkCard = ({image, title, description}) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <img
                src={image}
                alt={title}
                className="w-24 h-24 object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default HowItWorkCard;
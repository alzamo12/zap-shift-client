import React from 'react';

const FeatureCard = ({ image, title, description }) => {
    return (
        <div className="bg-white rounded-2xl p-6 flex flex-col md:flex-row items-center gap-10 md:gap-0">
            <img
                src={image}
                alt={title}
                className="md:w-1/5 object-contain mr-6 flex-shrink-0 md:pr-5 md:border-r-2 border-dashed border-gray-200"
            />
            <div className="flex-1 max-w-4xl md:px-10 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
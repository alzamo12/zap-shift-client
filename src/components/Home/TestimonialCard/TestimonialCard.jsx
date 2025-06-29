import React from 'react';

const TestimonialCard = ({ active, userName, ratings, review }) => {
    return (
        <div
            className={`rounded-xl p-6 shadow-md bg-white transition-all duration-300 ${active ? "opacity-100 scale-100" : "opacity-40 scale-90"
                }`}
        >
            <p className="text-gray-600 text-sm mb-6">“{ratings}”</p>
            <div className="flex items-center gap-4">
                {/* <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" /> */}
                <div>
                    <h4 className="font-semibold">{userName}</h4>
                    <p className="text-sm text-gray-400">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
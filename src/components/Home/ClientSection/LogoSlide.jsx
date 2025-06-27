import React from 'react';

const LogoSlide = ({src, alt}) => {
    return (
       <div className="flex items-center justify-center bg-white rounded-xl shadow h-32 p-4">
      <img src={src} alt={alt} className="max-h-full object-contain" />
    </div>
    );
};

export default LogoSlide;
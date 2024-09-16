import React from 'react';

const IntroBox = ({ title, description, image, button, right }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 px-16 py-16 ${right ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <div className={`flex items-center ${right ? 'order-1' : 'order-2'}`}>
        <img src={image} alt="innovation" className="w-full h-full object-cover rounded-lg max-h-[500px]" />
      </div>
      <div className={`flex items-center ${right ? 'order-2' : 'order-1'} text-left pl-12`}>
        <div>
          <h1 className="text-3xl font-semibold mt-24">{title}</h1>
          <p className="mt-2 font-light text-2xl">{description}</p>
          <div className="hidden lg:flex justify-start space-x-6 items-center mt-2">
            <a href="#" className="py-2 px-3 rounded-2xl text-blue-800 border border-blue-800">
              {button}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBox;

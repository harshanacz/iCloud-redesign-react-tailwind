import React from 'react';
import { ArrowRight } from 'lucide-react';


const SignInPageButton = () => {
    return (
        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 w-full max-w-sm">
            <input
                type="text"
                placeholder="Email or Phone Number"
                className="flex-grow outline-none bg-transparent text-gray-700"
            />
            <button className="flex items-center justify-center bg-transparent hover:bg-gray-200 rounded-full p-2">
                <ArrowRight className="text-gray-400" size={20} />
            </button>
        </div>
    );
};

export default SignInPageButton;

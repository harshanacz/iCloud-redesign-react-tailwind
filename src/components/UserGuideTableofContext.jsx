import { useState } from 'react';
import { PlusCircle, ArrowRight, MinusCircle } from 'lucide-react';
import { tableOfContext } from "../constants";

const UserGuideTableofContext = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mt-3 flex flex-col items-center'>
      <a 
        href="#" 
        onClick={() => setIsOpen(!isOpen)} 
        className="text-blue-800 text-2xl font-light flex items-center"
      >
        Table of Contents
        {isOpen ? <MinusCircle className="ml-1 w-5 h-5" /> : <PlusCircle className="ml-1 w-5 h-5" />}
      </a>
      
      {isOpen && (
        <div className="mt-2">
          {tableOfContext.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-blue-800 text-2xl font-light flex items-center"
            >
              <ArrowRight className="ml-2 mr-2 w-5 h-5" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserGuideTableofContext;

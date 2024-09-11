
import { useState } from "react";
import logo from "../assets/logo.png";


const GlobalNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10  mr-2" src={logo} alt="Logo" />
            {}
          </div>
          

         
        </div>
       
      </div>
    </nav>
  );
};

export default GlobalNavbar;
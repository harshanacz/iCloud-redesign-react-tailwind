
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const GlobalNavbar = () => {


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg ">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
          <Link to="/"><img className="h-10  mr-2" src={logo} alt="Logo" /></Link>  
            {}
          </div>
          

         
        </div>
       
      </div>
    </nav>
  );
};

export default GlobalNavbar;
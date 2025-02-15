import {React, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { HiXMark } from "react-icons/hi2";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = ()=>{
    setOpen((prev)=>!prev)
  }
  return (
    <nav className={` bg-gray-900 text-white w-full h-14 fixed top-0 flex 
       justify-between  sm:p-2 p-2.5 z-50`}
    >
          <div className={` ${open?"":"font-bold text-lg"}`}>Siddhant Mishra</div>
          {/* visible only in small devices */}
          <div className={`absolute top-0 right-0  ${open?" h-screen bg-gray-900 flex flex-row justify-between":"sm:hidden"}`}>

              <div className={` sm:hidden p-2.5`} 
                onClick={handleClick}>
                {open ? <HiXMark size={24}/>:<HiMenu  size={24}/>}
              </div>

              {/* visible only in small devices */}
              <div className={`sm:hidden transition-all duration-700 ease-in ${open?"flex flex-col p-3":"hidden"}`}>
                <NavLink to='/about' className="text-md text-gray-300 hover:underline">About</NavLink>
                <NavLink to="/skills" className="text-md text-gray-300 hover:underline">Skills</NavLink>
                <NavLink to="/education" className="text-md text-gray-300 hover:underline">Education</NavLink>
                <NavLink to="/projects" className="text-md text-gray-300 hover:underline">Projects</NavLink>
                <NavLink to="/contact" className="text-md text-gray-300 hover:underline">Contact</NavLink>
              </div>
      </div>
      

      <div className='hidden w-2/4 sm:flex sm:flex-row sm:justify-around'>
        <NavLink to='/about' className="text-lg hover:underline">About</NavLink>
        <NavLink to="/skills" className="text-lg hover:underline">Skills</NavLink>
        <NavLink to="/education" className="text-lg hover:underline">Education</NavLink>
        <NavLink to="/projects" className="text-lg hover:underline">Projects</NavLink>
        <NavLink to="/contact" className="text-lg hover:underline">Contact</NavLink>
      </div>

      <div>

      </div>
    </nav>
  );
};

export default Navbar;

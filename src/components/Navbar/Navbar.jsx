import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'; 
import PagesDropDown from "./PagesDropDown";
import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="font-sans z-40">

    <nav className="myContainer text-black">
        <div className="max-w-7xl flex justify-between items-center mx-auto ">
            <a href="/" className="font-bold text-3xl">TuatTA</a>
           <div className="hidden lg:block">
             <ul className="flex font-semibold items-center ">
                <li>
                <NavLink className="menu-item group-hover:border-white flex flex-row items-center"> Demo <span> <MdOutlineKeyboardArrowDown className="text-lg font-bold mt-1 ml-1" /> </span></NavLink>
                  <PagesDropDown />       
                </li>              
                
                {/* Pages Item */}
                <li className="group relative">
                    <NavLink className="menu-item group-hover:border-white flex flex-row items-center">Pages <span> <MdOutlineKeyboardArrowDown className="text-lg font-bold mt-1 ml-1" /> </span></NavLink>
                  <PagesDropDown />                    
                </li>

                <li>
                    <NavLink className="menu-item group-hover:border-white flex flex-row items-center">Project <span> <MdOutlineKeyboardArrowDown className="text-lg font-bold mt-1 ml-1" /> </span></NavLink>
                </li>

                <li>
                    <NavLink className="menu-item group-hover:border-white flex flex-row items-center">Blog <span> <MdOutlineKeyboardArrowDown className="text-lg font-bold mt-1 ml-1" /> </span></NavLink>
                </li>

                <li>
                <NavLink href="" className="menu-item group-hover:border-white flex flex-row items-center">Documentation <span> <MdOutlineKeyboardArrowDown className="text-lg font-bold mt-1 ml-1" /> </span></NavLink>
                </li>
             </ul>
           </div>
            <ul className="flex font-semibold">
                <li><a href="" className="menu-item">ACCOUNT</a></li>                
            </ul>
        </div>
    </nav>

  	</div>
  
  );
};

export default Navbar;

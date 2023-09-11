import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const PagesDropDown = () => {
  return (
    <ul
      className={`absolute left-0 py-6 w-52 mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500 rounded-md bg-white z-50`}
      style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
    >
      {/* Pages Services  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          Services{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li className={`menu-sub-item`}>
            <NavLink to="/services1">
              Services <span className={`ml-2`}>|</span>
            </NavLink>
          </li>
          <li className={`menu-sub-item -mt-1`}>
            <NavLink to="/services2">
              Services <span className={`ml-2`}>||</span>
            </NavLink>
          </li>
        </ul>
      </li>
      {/* Pages About  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          About{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li>
            <a href="" className={`menu-sub-item`}>
              About <span className={`ml-2`}>|</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              About <span className={`ml-2`}>||</span>
            </a>
          </li>
        </ul>
      </li>

      {/* Pages Shop  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          Shop{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li>
            <a href="" className={`menu-sub-item`}>
              Shop <span className={`ml-2`}>|</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Shop <span className={`ml-2`}>||</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Product Page
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Shopping Cart
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Checkout
            </a>
          </li>
        </ul>
      </li>

      {/* Pages Contact  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          Contact{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li>
            <a href="" className={`menu-sub-item`}>
              Contact <span className={`ml-2`}>|</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Contact <span className={`ml-2`}>||</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Contact <span className={`ml-2`}>|||</span>
            </a>
          </li>
        </ul>
      </li>

      {/* Pages Career  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          Career{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li>
            <a href="" className={`menu-sub-item`}>
              Job Listing <span className={`ml-2`}>|</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Job Listing <span className={`ml-2`}>||</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Job Description
            </a>
          </li>
        </ul>
      </li>

      {/* Pages Utility  */}
      <li className={`sub-dropdown relative`}>
        <a
          href=""
          className={`menu-sub-item flex flex-row justify-between items-center`}
        >
          Utility{" "}
          <span>
            {" "}
            <MdOutlineKeyboardArrowRight
              className={`text-lg font-bold mt-1 ml-1`}
            />{" "}
          </span>
        </a>
        <ul
          className={`sub-dropdown-content absolute left-full top-full w-48 opacity-0 invisible transition-all duration-500 ml-2 rounded-md py-3 bg-white z-50`}
          style={{ boxShadow: "0px 0px 32px -3px rgba(0,0,0,0.1)" }}
        >
          <li>
            <a href="" className={`menu-sub-item`}>
              404 Not Found
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Login<span className={`ml-2`}>|</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Login<span className={`ml-2`}>||</span>
            </a>
          </li>{" "}
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Register<span className={`ml-2`}>|</span>
            </a>
          </li>{" "}
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Register<span className={`ml-2`}>||</span>
            </a>
          </li>
          <li>
            <a href="" className={`menu-sub-item -mt-1`}>
              Terms & Condition
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="" className={`menu-sub-item`}>
          Pricing
        </a>
      </li>
    </ul>
  );
};

export default PagesDropDown;

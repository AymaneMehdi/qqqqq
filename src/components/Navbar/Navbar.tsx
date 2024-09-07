import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import image1 from "./image.png";

import { BsBorderStyle } from "react-icons/bs";
import {
  MdOutlineLogout,
  MdOutlineSell,
  MdOutlineMessage,
} from "react-icons/md";
import { CiUser } from "react-icons/ci";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const Navbar: React.FC = () => {
  const { isLoggedIn, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<string>("");
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  useEffect(() => {
    setCurrentPage(location.pathname); // location.pathname gives you the current URL path
  }, [location.pathname]);

  useEffect(() => {
    if (userRole === "USER") {
      setMenuItems([
        {
          key: "1",
          label: <Link to={`/messages`}>messages</Link>,
          icon: <MdOutlineMessage />,
        },
        {
          key: "2",
          label: <Link to={"/my-orders"}> my orders </Link>,
          icon: <BsBorderStyle />,
        },
        {
          key: "3",
          label: <Link to={"/profile"}> profile </Link>,
          icon: <CiUser />,
        },
        {
          key: "4",
          label: <Link to={"/become-seller"}> Become a Service Provider </Link>,
          icon: <MdOutlineSell />,
        },
        {
          key: "5",
          label: "Logout",
          danger: true,
          onClick: handleLogout,
          icon: <MdOutlineLogout className="text-2xl" />,
        },
      ]);
    } else if (userRole === "ADMIN") {
      setMenuItems([
        {
          key: "1",
          label: <Link to={`/messages`}>messages</Link>,
          icon: <MdOutlineMessage />,
        },
        {
          key: "2",
          label: <Link to={"/orders"}> Orders </Link>,
          icon: <BsBorderStyle />,
        },
        {
          key: "3",
          label: <Link to={"/profile"}> profile </Link>,
          icon: <CiUser />,
        },
        {
          key: "4",
          label: "Logout",
          danger: true,
          onClick: handleLogout,
          icon: <MdOutlineLogout className="text-2xl" />,
        },
      ]);
    }
  }, [userRole]);

  return (
    <nav className="bg-[#39b19d] shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <div className="flex space-x-4">
            <div>
              <Link
                to="/"
                className="flex items-center py-5 px-2 text-black"
                font-semibold
              >
                <img className="h-12 w-full mr-2" src={image1} alt="Logo" />
              </Link>
            </div>
          </div>

          {/* Center - About Us */}
          <div className="flex justify-center flex-grow">
            <Link
              to="/aboutus"
              className={` ${currentPage == "/aboutus" ? "bg-[#ffedd5]  text-[#39b19d] rounded-full " : " text-[#ffedd5] "}   font-medium karla py-3 px-4 `}
            >
              About Us
            </Link>
          </div>

          {/* Right - Links for Login, Register, or User Menu */}
          <div className="flex items-center space-x-1">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className={`py-3 px-4 rounded-full text-[#ffedd5] font-semibold `}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`py-3 px-4 bg-[#ffedd5] rounded-full text-[#39b19d] font-semibold `}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {userRole === "USER" && (
                  <>
                    <Link
                      to="/discover-gigs"
                      className={` ${currentPage == "/discover-gigs" ? "bg-[#F8AF33]  text-white rounded-full " : " text-[#5f5a52e0] hover:text-[#F8AF33]"}  karla font-semibold py-3 px-4 `}
                    >
                      Discover Gigs
                    </Link>
                    <Link
                      to="/rapid-intervention"
                      className={` ${currentPage == "/rapid-intervention" ? "bg-[#F8AF33]  text-white rounded-full " : " text-[#5f5a52e0] hover:text-[#F8AF33]"} karla  font-semibold py-3 px-4 `}
                    >
                      Find a Worker
                    </Link>
                  </>
                )}
                {userRole === "ADMIN" && (
                  <>
                    <Link
                      to="/dashboard"
                      className={` ${currentPage == "/dashboard" ? "bg-[#F8AF33]  text-white rounded-full " : " text-[#5f5a52e0] hover:text-[#F8AF33]"} karla font-semibold py-3 px-4 `}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/my-gigs"
                      className={` ${currentPage == "/my-gigs" ? "bg-[#F8AF33]  text-white rounded-full " : " text-[#5f5a52e0] hover:text-[#F8AF33]"} karla  font-semibold py-3 px-4 `}
                    >
                      My Gigs
                    </Link>
                    <Link
                      to="/add"
                      className={` ${currentPage == "/add" ? "bg-[#F8AF33]  text-white rounded-full " : " text-[#5f5a52e0] hover:text-[#F8AF33]"} karla  font-semibold py-3 px-4 `}
                    >
                      Add Gig
                    </Link>
                  </>
                )}

                <div className=" pl-4">
                  <Dropdown menu={{ items: menuItems }}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://www.gravatar.com/avatar?d=mp"
                          alt="Profile"
                        />
                      </Space>
                    </a>
                  </Dropdown>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

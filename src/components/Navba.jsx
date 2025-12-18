import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Navba = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <NavLink
          to="/"
          className={`flex items-center text-sm font-bold lg:hover:border-b-2 lg:hover:border-purple-500 ${
            location.pathname === "/" ? "text-purple-600" : "text-black"
          }`}
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
        <Link
          to="/about"
          className={`flex items-center text-sm font-bold lg:hover:border-b-2 lg:hover:border-purple-500 ${
            location.pathname === "/about" ? "text-purple-600" : "text-black"
          }`}
        >
          About
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-serif text-3xl font-extrabold text-purple-600"
        >
          TAZERH
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            {/* Desktop E-Portal */}
            <Menu
              animate={{ mount: { y: 0 }, unmount: { y: 25 } }}
            >
              <MenuHandler>
                <div className="flex items-center justify-center">
                  <button className="hidden lg:inline-block font-bold hover:bg-white px-3 py-1 rounded">
                    e-Portal
                  </button>
                  <svg
                    className="h-4 ml-1 hidden lg:inline-block"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem>
                  <Link to="/adminlogin">Admin</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/studentlogin">Student</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav */}
      <MobileNav open={openNav}>
        {navList}
        <div className="mt-4">
          {/* Mobile E-Portal Dropdown */}
          <Menu animate={{ mount: { y: 0 }, unmount: { y: 25 } }} placement="bottom-start">
            <MenuHandler>
              <Button variant="filled" size="sm" fullWidth>
                E-Portal
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <Link to="/adminlogin">Admin</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/studentlogin">Student</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default Navba;

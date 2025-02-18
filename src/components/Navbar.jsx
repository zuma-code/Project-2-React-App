import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoNavbar from '../assets/logoNavbar.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleAdminClick = (event) => {
    event.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center relative ml-[-30px]">
      {/* Logo / Brand */}
      <div className="ml-12">
        <img src={logoNavbar} alt="Travel Explorer Logo" className="h-20 w-20" />
      </div>

      <h1 className="text-3xl font-bold">Explore Travel</h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 mr-20 relative">
        <li>
          <Link to="/" className="hover:text-blue-300 hover:underline transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-300 hover:underline transition">
            About
          </Link>
        </li>
        
        {/* Admin Dropdown */}
        <li className="relative">
          <button
            onClick={handleAdminClick}
            className="hover:text-blue-300 hover:underline transition focus:outline-none"
          >
            Admin ▼
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden z-50">
              <li>
                <Link
                  to="../deleteDestination"
                  className="block px-4 py-2 hover:bg-red-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Delete Destination
                </Link>
              </li>
              <li>
                <Link
                  to="/a/create"
                  className="block px-4 py-2 hover:bg-blue-200"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Add Destination
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

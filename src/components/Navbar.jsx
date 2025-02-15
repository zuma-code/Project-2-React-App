import { Link } from "react-router-dom";
import logoNavbar from '../assets/logoNavbar.png';


const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-1 flex justify-between items-center">
      {/* Logo / Brand (Shifted 50px to the right) */}
      <div className="ml-12"> 
        <img src={logoNavbar} alt="Travel Explorer Logo" className="h-20 w-20" />
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-10 mr-5">
        <li>
          <Link to="/" className="hover:text-blue-300 hover:underline transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/reviews" className="hover:text-blue-300 hover:underline transition">
            Reviews
          </Link>
        </li>
        <li>
          <Link to="/about" className=" hover:text-blue-300 hover:underline transition">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


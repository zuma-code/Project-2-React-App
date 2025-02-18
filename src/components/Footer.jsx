import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto">
    <nav className="mb-2">
    <Link to="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</Link> |
    <Link to="/terms-of-use" className="mx-2 hover:underline">Terms of Use</Link> |
    <Link to="/contact-us" className="mx-2 hover:underline">Contact Us</Link>
    </nav>
    <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:text-yellow-500">Facebook</a>
          <a href="#" className="hover:text-yellow-500">Instagram</a>
          <a href="#" className="hover:text-yellow-500">Twitter</a>
    </div>
      © 2025 Travel Explore | All rights reserved.
    </footer>
  );
};

export default Footer;

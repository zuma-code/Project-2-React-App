import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-green-600 text-white text-center p-4 mt-auto">
    <nav className="mb-2">
    <Link to="/privacy-policy" className="mx-2 hover:underline">Privacy Policy</Link> |
    <Link to="/terms-of-use" className="mx-2 hover:underline">Terms of Use</Link> |
    <Link to="/contact-us" className="mx-2 hover:underline">Contact Us</Link>
    </nav>

      © 2025 Travel Explorer. All rights reserved.
    </footer>
  );
};

export default Footer;

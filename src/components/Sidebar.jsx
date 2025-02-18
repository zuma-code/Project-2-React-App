import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-green-600 text-white w-64 min-h-screen p-12">
    
      <ul className="space-y-12">
        <li>
          <Link to="/destinations" className="block text-xl hover:text-blue-300 transition">
            🌍 Destinations
          </Link>
        </li>
        <li>
          <Link to="/best-reviews" className="block text-xl hover:text-blue-400 transition">
            ⭐ Best Reviews
          </Link>
        </li>
        <li>
          <Link to="/greatdeals" className="block text-xl hover:text-blue-400 transition">
            🔥 Great Deals
          </Link>
        </li>
        
       
      </ul>
    </aside>
  );
};

export default Sidebar;


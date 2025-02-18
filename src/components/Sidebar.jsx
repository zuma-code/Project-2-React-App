import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-blue-400 text-white w-64 min-h-screen p-12">
      <ul className="space-y-12">
        <li>
          <Link to="/destinations" className="block text-xl hover:text-blue-700 transition">
            🌍 Destinations
          </Link>
        </li>
        <li>
          <Link to="/bestReviews" className="block text-xl hover:text-blue-700 transition">
            ⭐ Best Reviews
          </Link>
        </li>
        <li>
          <Link to="/greatDeals" className="block text-xl hover:text-blue-700 transition">
            🔥 Great Deals
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;


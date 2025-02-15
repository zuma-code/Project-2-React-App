import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-green-600 text-white w-64 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Explore Travel</h1>
      <ul className="space-y-8">
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


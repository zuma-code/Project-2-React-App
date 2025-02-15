import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Destinations = () => {
  const [places, setPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      const destinationList = [
        { id: 1, name: "Paris", description: "City of Light" },
        { id: 2, name: "Tokyo", description: "Land of the Rising Sun" },
        { id: 3, name: "New York", description: "The Big Apple" },
      ];
      setPlaces(destinationList);
      setFilteredPlaces(destinationList);
    }, 2000);
  }, []);

  useEffect(() => {
    // Filter destinations when search input changes
    setFilteredPlaces(
      places.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, places]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Top Destinations
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search destinations..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      />

      {/* Destination List */}
      {filteredPlaces.length === 0 ? (
        <p className="text-gray-600 text-center">No destinations found</p>
      ) : (
        <ul className="space-y-4">
          {filteredPlaces.map((place) => (
            <li
              key={place.id}
              className="p-4 border rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              <Link
                to={`/destinations/${place.id}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {place.name}
              </Link>
              <p className="text-gray-600">{place.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Destinations;


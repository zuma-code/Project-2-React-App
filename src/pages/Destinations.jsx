import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BACK_API } from "../API";


function Destinations() {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({}); // Store ratings (1 to 3 hearts)

  // Fetch destinations from API
  useEffect(() => {
    axios
      .get(`${BACK_API}/destinations`)
      .then((response) => {
        setDestinations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Failed to load destinations. Please try again later.");
        setLoading(false);
      });
  }, []);

  // Load ratings from local storage on mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || {};
    setFavorites(storedFavorites);
  }, []);

  // Handle heart rating (1 to 3 hearts)
  const setHeartRating = async (destinationId, heartCount) => {
    try {
      // Send a PATCH request to update the rating in db.json
      const response = await axios.patch(`${API_URL}/destinations/${destinationId}`, {
        rating: heartCount,
      });
  
      // Update the local state after the API updates the database
      setDestinations((prevDestinations) =>
        prevDestinations.map((destination) =>
          destination.id === destinationId ? { ...destination, rating: response.data.rating } : destination
        )
      );
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Destinations
      </h2>
      <h4 className="text-m text-center text-blue-300 mb-8">
        Click on a destination for full details
      </h4>

      {/* Loading Message */}
      {loading && <p className="text-center text-gray-500">Loading destinations...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Grid Layout for Destination Cards */}
      {!loading && !error && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Link to={`/destinations/${destination.id}`} className="block">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {destination.name}
                </h3>
                {/* 3-Heart Rating System */}
                <div className="flex">
                {[1, 2, 3].map((heartCount) => (
                   <button
                   key={heartCount}
                  onClick={() => setHeartRating(destination.id, heartCount)}
                  className={`text-2xl mx-1 transition-colors ${
                  destination.rating >= heartCount ? "text-red-500" : "text-gray-300"
                  }`}
                  >
                    ♥
               </button>
              ))}
            </div>

              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Destinations Found Message */}
      {!loading && !error && destinations.length === 0 && (
        <p className="text-center text-gray-500">No destinations found.</p>
      )}
    </div>
  );
}

export default Destinations;


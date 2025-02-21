import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BACK_API } from "../API";



function BestReviews() {
  const [bestDestinations, setBestDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACK_API}/destinations`)
      .then((response) => {
        if (!Array.isArray(response.data)) {
          throw new Error("Invalid API response format");
        }

        // Filter destinations with exactly 3 hearts
        const topRated = response.data.filter((destination) => destination.rating === 3);
        setBestDestinations(topRated);
      })
      .catch((error) => {
        console.error("Error fetching best-rated destinations:", error);
        setError("Failed to load best-rated destinations. Please try again later.");
      })
      .finally(() => setLoading(false)); // Ensures loading state updates
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-6 leading-snug tracking-wide">
  🌟 Best Reviewed Destinations 🌟  
     </h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
  Looking for the most breathtaking travel experiences?  
  Our top-rated destinations have been highly praised by travelers like you!  
    </p>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-500">Loading best-rated destinations...</p>}

      {/* Error Message */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Display Best Rated Destinations */}
      {!loading && !error && bestDestinations.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {bestDestinations.map((destination) => (
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
                <h3 className="text-xl font-semibold text-gray-800">{destination.name}</h3>
                {/* Display 3 red hearts */}
                <div className="flex">
                  {[...Array(3)].map((_, index) => (
                    <span key={index} className="text-2xl mx-1 text-red-500">♥</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500">No destinations with 3 hearts found.</p>
      )}
    </div>
  );
}

export default BestReviews;



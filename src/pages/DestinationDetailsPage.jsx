import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACK_API } from "../API";


function DestinationDetails() {
  const { id } = useParams(); // Get the destination ID from the URL
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${BACK_API}/destinations/${id}`)
      .then((response) => {
        setDestination(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load destination details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6 mt-6">
      {/* Destination Image */}
      <img
        src={destination.image}
        alt={destination.name}
        className="w-full h-64 object-cover rounded-md"
      />

      {/* Destination Name */}
      <h2 className="text-3xl font-bold text-gray-800 mt-4">{destination.name}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-2">{destination.description}</p>

      {/* Best Time to Visit */}
      <div className="mt-4">
        <p className="text-gray-700 font-semibold">Best Time to Visit:</p>
        <p className="text-gray-600">{destination.bestTimeToVisit || "Not available"}</p>
      </div>

      {/* Popular Attractions */}
      <div className="mt-4">
        <p className="text-gray-700 font-semibold">Popular Attractions:</p>
        {destination.popularAttractions && destination.popularAttractions.length > 0 ? (
          <ul className="list-disc ml-5 text-gray-600">
            {destination.popularAttractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No attractions available.</p>
        )}
      </div>

      {/* Reviews */}
      <div className="mt-6">
        <p className="text-gray-700 font-semibold text-lg">Reviews:</p>
        {destination.reviews && destination.reviews.length > 0 ? (
          <div className="mt-2">
            {destination.reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-md mt-2">
                <p className="text-gray-800 font-medium">{review.user} ⭐ {review.rating}/5</p>
                <p className="text-gray-600 italic">"{review.comment}"</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}

export default DestinationDetails;

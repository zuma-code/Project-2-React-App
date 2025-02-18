import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005/destinations"; // API endpoint

const GreatDealsPage = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 2) {
          // Shuffle the array and pick 2 random destinations
          const shuffled = data.sort(() => 0.5 - Math.random());
          setDeals(shuffled.slice(0, 2));
        } else {
          setDeals(data); // If less than 2 destinations exist, show all
        }
      })
      .catch((error) => console.error("Error fetching deals:", error));
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-6">
        🌍 Great Travel Deals ✈️
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
        Explore our exclusive deals on amazing destinations! Two of the best travel spots are featured every time you visit this page.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {deals.length > 0 ? (
          deals.map((destination) => (
            <div key={destination.id} className="border rounded-lg shadow-lg p-4 bg-white">
              <img src={destination.image} alt={destination.name} className="w-full h-60 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">{destination.name}</h3>
              <p className="text-gray-600">{destination.description}</p>
              <p className="text-green-600 font-bold mt-2">🔥 Limited Offer!</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No deals available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default GreatDealsPage;
